import { useState, useEffect } from 'react';
import { fetchBlogs } from '../api';
import './admin.css';

const DashboardBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Technology',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '5 min read',
    excerpt: '',
    featured: false,
    description: '',
    image: null
  });

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Direct fetch with populate to get all relations including image
      const res = await fetch("http://localhost:1337/api/blogs?populate=*", {
        method: "GET",
      });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch blogs: ${res.status}`);
      }
      
      const data = await res.json();
      console.log('Fetched blogs data:', data);
      console.log('Data.data array:', data.data);
      
      // Check if data.data exists and is an array
      if (!data.data || !Array.isArray(data.data)) {
        console.error('Invalid data structure:', data);
        setBlogs([]);
        return;
      }
      
      // Transform Strapi v5 data structure to flat format for easy rendering
      const transformedBlogs = data.data.map((item, index) => {
        console.log(`Processing blog ${index}:`, item);
        
        if (!item) {
          console.error(`Blog ${index} is null/undefined:`, item);
          return null;
        }
        
        // Strapi v5 can return data in two formats - check which one we have
        const hasAttributes = item.attributes !== undefined;
        const blogData = hasAttributes ? item.attributes : item;
        
        console.log(`Blog ${index} data:`, blogData);
        
        return {
          id: item.id,
          documentId: item.documentId, // Strapi v5 uses documentId for operations
          title: blogData.title || '',
          category: blogData.category || 'Technology',
          date: blogData.date || '',
          readTime: blogData.readTime || '5 min read',
          excerpt: blogData.excerpt || '',
          featured: blogData.featured || false,
          description: blogData.description || [],
          image: blogData.image?.url
            ? `http://localhost:1337${blogData.image.url}`
            : (blogData.image?.data?.attributes?.url
                ? `http://localhost:1337${blogData.image.data.attributes.url}`
                : null),
          // Keep original for edit
          originalData: blogData
        };
      }).filter(Boolean); // Remove any null entries
      
      console.log('Transformed blogs:', transformedBlogs);
      setBlogs(transformedBlogs);
    } catch (err) {
      setError('Failed to fetch blogs. Make sure Strapi is running.');
      console.error('Load blogs error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'Technology',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '5 min read',
      excerpt: '',
      featured: false,
      description: '',
      image: null
    });
    setImagePreview(null);
    setShowForm(false);
    setEditMode(false);
    setCurrentBlogId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Convert plain text description to rich text blocks format for Strapi
      const descriptionBlocks = formData.description ? [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: formData.description
            }
          ]
        }
      ] : [];

      if (editMode) {
        // UPDATE MODE: Handle image separately if provided
        let uploadedImageId = null;

        if (formData.image) {
          try {
            const imageFormData = new FormData();
            imageFormData.append('files', formData.image);

            console.log('Uploading image...');
            const imageResponse = await fetch('http://localhost:1337/api/upload', {
              method: 'POST',
              body: imageFormData
            });

            if (!imageResponse.ok) {
              console.warn('Image upload failed, continuing without image');
            } else {
              const imageData = await imageResponse.json();
              uploadedImageId = imageData[0]?.id;
            }
          } catch (imageErr) {
            console.warn('Image upload error, continuing without image:', imageErr);
          }
        }

        // Update blog
        const blogData = {
          title: formData.title,
          category: formData.category,
          date: formData.date,
          readTime: formData.readTime,
          excerpt: formData.excerpt,
          featured: formData.featured,
          description: descriptionBlocks
        };

        if (uploadedImageId) {
          blogData.image = uploadedImageId;
        }

        console.log('Updating blog with ID:', currentBlogId, 'Data:', blogData);
        const response = await fetch(`http://localhost:1337/api/blogs/${currentBlogId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: blogData })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Update error:', errorData);
          throw new Error(errorData.error?.message || 'Failed to update blog');
        }

        const result = await response.json();
        console.log('Blog updated successfully:', result);
        setSuccessMessage('✅ Blog updated successfully!');
      } else {
        // CREATE MODE: Send JSON data (without image for now to test)
        const blogData = {
          title: formData.title,
          category: formData.category,
          date: formData.date,
          readTime: formData.readTime,
          excerpt: formData.excerpt,
          featured: formData.featured,
          description: descriptionBlocks
        };

        console.log('Creating blog with data:', blogData);
        const response = await fetch('http://localhost:1337/api/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: blogData })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Create error:', errorData);
          
          if (response.status === 403) {
            throw new Error('Permission denied. Make sure Blog "create" permission is enabled in Strapi Admin → Settings → Roles → Public → Blog.');
          }
          
          throw new Error(errorData.error?.message || `Failed to create blog (${response.status})`);
        }

        const result = await response.json();
        console.log('Blog created:', result);
        
        // If image was selected, update the blog with the image
        if (formData.image && result.data) {
          try {
            const imageFormData = new FormData();
            imageFormData.append('files', formData.image);
            imageFormData.append('ref', 'api::blog.blog');
            imageFormData.append('refId', result.data.id);
            imageFormData.append('field', 'image');

            console.log('Uploading image for blog:', result.data.id);
            const imageResponse = await fetch('http://localhost:1337/api/upload', {
              method: 'POST',
              body: imageFormData
            });

            if (imageResponse.ok) {
              const imageData = await imageResponse.json();
              console.log('Image uploaded and attached to blog:', imageData);
            } else {
              const errorText = await imageResponse.text();
              console.error('Image upload failed:', errorText);
              throw new Error(`Image upload failed (${imageResponse.status}). Please enable Upload permissions in Strapi.`);
            }
          } catch (imageErr) {
            console.error('Image upload error:', imageErr);
            setError(`⚠️ Blog created but image failed: ${imageErr.message}`);
            // Don't throw - blog was still created successfully
          }
        }
        
        setSuccessMessage('✅ Blog created successfully!');
      }

      resetForm();
      await loadBlogs();
      setTimeout(() => setSuccessMessage(''), 3000);

    } catch (err) {
      setError(`❌ ${err.message}`);
      console.error('Submit error:', err);
    }
  };

  const handleEdit = (blog) => {
    // Convert rich text blocks back to plain text for editing
    let descriptionText = '';
    if (blog.description && Array.isArray(blog.description)) {
      descriptionText = blog.description
        .map(block => block.children?.map(child => child.text).join(' '))
        .join('\n\n');
    } else if (typeof blog.description === 'string') {
      descriptionText = blog.description;
    }
    
    setFormData({
      title: blog.title || '',
      category: blog.category || 'Technology',
      date: blog.date || '',
      readTime: blog.readTime || '5 min read',
      excerpt: blog.excerpt || '',
      featured: blog.featured || false,
      description: descriptionText,
      image: null
    });
    
    if (blog.image) {
      setImagePreview(blog.image);
    }
    
    // Store both id and documentId for update
    setCurrentBlogId(blog.documentId || blog.id);
    setEditMode(true);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (blogId, documentId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      // Strapi v5 uses documentId for DELETE operations
      const deleteId = documentId || blogId;
      console.log('Deleting blog with ID:', blogId, 'documentId:', documentId, 'Using:', deleteId);
      
      const response = await fetch(`http://localhost:1337/api/blogs/${deleteId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Delete error:', errorData);
        throw new Error(`Failed to delete blog: ${response.status}`);
      }

      console.log('Blog deleted successfully from Strapi');
      setSuccessMessage('✅ Blog deleted successfully!');
      
      // Reload blogs to reflect the deletion
      await loadBlogs();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError(`❌ Failed to delete blog: ${err.message}`);
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="blog-management">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📝 Blog Management</h1>
          <p>Create and manage your blog posts</p>
        </div>
        <button 
          className="btn-add-new"
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Cancel
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Create New Blog
            </>
          )}
        </button>
      </div>

      {/* Success/Error Messages */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}

      {/* Blog Form */}
      {showForm && (
        <div className="blog-form-container">
          <div className="form-header">
            <h2>{editMode ? '✏️ Edit Blog Post' : '✨ Create New Blog Post'}</h2>
            <p>Fill in the details below to {editMode ? 'update' : 'create'} your blog post</p>
          </div>

          <form onSubmit={handleSubmit} className="modern-blog-form">
            {/* Row 1: Title & Category */}
            <div className="form-row">
              <div className="form-field full-width">
                <label htmlFor="title">
                  <span className="label-icon">📝</span>
                  Blog Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter an engaging blog title"
                  required
                />
              </div>
            </div>

            {/* Row 2: Category, Date, Read Time */}
            <div className="form-row three-columns">
              <div className="form-field">
                <label htmlFor="category">
                  <span className="label-icon">🏷️</span>
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Technology">Technology</option>
                  <option value="Best Practices">Best Practices</option>
                  <option value="Case Studies">Case Studies</option>
                  <option value="Security">Security</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="date">
                  <span className="label-icon">📅</span>
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="readTime">
                  <span className="label-icon">⏱️</span>
                  Read Time *
                </label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  placeholder="5 min read"
                  required
                />
              </div>
            </div>

            {/* Row 3: Excerpt */}
            <div className="form-row">
              <div className="form-field full-width">
                <label htmlFor="excerpt">
                  <span className="label-icon">📄</span>
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Write a brief summary that will appear in blog listings..."
                  rows="3"
                  required
                />
                <span className="field-hint">{formData.excerpt.length} characters</span>
              </div>
            </div>

            {/* Row 4: Description */}
            <div className="form-row">
              <div className="form-field full-width">
                <label htmlFor="description">
                  <span className="label-icon">✍️</span>
                  Full Content *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write your full blog content here... Use rich text formatting in Strapi for better structure."
                  rows="10"
                  required
                />
                <span className="field-hint">{formData.description.length} characters</span>
              </div>
            </div>

            {/* Row 5: Image Upload */}
            <div className="form-row">
              <div className="form-field full-width">
                <label htmlFor="image">
                  <span className="label-icon">🖼️</span>
                  Featured Image (Optional)
                </label>
                <div className="image-upload-area">
                  {imagePreview ? (
                    <div className="image-preview-container">
                      <img src={imagePreview} alt="Preview" className="image-preview" />
                      <button
                        type="button"
                        className="remove-image-btn"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData(prev => ({ ...prev, image: null }));
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="image" className="image-upload-label">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8L12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload image</span>
                      <span className="upload-hint">PNG, JPG up to 5MB</span>
                    </label>
                  )}
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Row 6: Featured Toggle */}
            <div className="form-row">
              <div className="form-field checkbox-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    <span className="label-icon">⭐</span>
                    Mark as Featured Post
                  </span>
                </label>
                <p className="field-hint">Featured posts appear prominently on the blog page</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                {editMode ? '💾 Update Blog' : '🚀 Publish Blog'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Blogs List */}
      <div className="blogs-list-container">
        <div className="list-header">
          <h2>📚 Published Blogs ({blogs.length})</h2>
          <div className="list-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Featured</button>
            <button className="filter-btn">Recent</button>
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="empty-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 7H17M7 11H17M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3>No blogs yet</h3>
            <p>Create your first blog post to get started!</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>
              Create Blog
            </button>
          </div>
        ) : (
          <div className="blogs-grid">
            {blogs.map((blog) => {
              const displayImage = blog.image || 'https://via.placeholder.com/400x250?text=No+Image';

              return (
                <div key={blog.id} className="blog-card-item">
                  <div className="blog-card-image">
                    <img src={displayImage} alt={blog.title || 'Blog'} />
                    {blog.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                    <span className="category-badge">{blog.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span className="meta-item">📅 {blog.date}</span>
                      <span className="meta-item">⏱️ {blog.readTime}</span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-card-actions">
                      <button 
                        className="action-btn btn-edit"
                        onClick={() => handleEdit(blog)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M18.5 2.5C18.8978 2.1022 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.1022 21.5 2.5C21.8978 2.8978 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.1022 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Edit
                      </button>
                      <button 
                        className="action-btn btn-delete"
                        onClick={() => handleDelete(blog.id, blog.documentId)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBlogs;
