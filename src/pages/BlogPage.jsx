import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogPage.css";

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from Strapi
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/blogs?populate=*");

        // ✅ Handle both new Strapi v5 structure and your JSON format
        const formatted = res.data.data.map((item) => {
          const attr = item.attributes || item; // handle both v4/v5
          const imgUrl =
            attr.image?.data?.attributes?.url ||
            attr.image?.url ||
            "https://via.placeholder.com/800x500?text=No+Image";

          return {
            id: item.id,
            title: attr.title,
            category: attr.category,
            date: attr.date,
            readTime: attr.readTime,
            excerpt: attr.excerpt,
            featured: attr.featured,
            description: attr.description, // ✅ keep the block array
            image: imgUrl.startsWith("http")
              ? imgUrl
              : `http://localhost:1337${imgUrl}`,
          };
        });

        setBlogPosts(formatted);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ["All", "Technology", "Best Practices", "Case Studies", "Security"];

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  const featuredPost = blogPosts.find((post) => post.featured);
  const recentPosts = filteredPosts.filter((post) => !post.featured);

  if (loading) {
    return (
      <div className="blog-page-container" style={{ textAlign: "center", padding: "80px" }}>
        <h3>Loading blog posts...</h3>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      {/* Header Section */}
      <div className="blog-header">
        <div className="blog-header-content">
          <h1 className="blog-main-title">Autointelli Blog</h1>
          <p className="blog-main-subtitle">
            Insights, best practices, and updates from the world of IT operations and automation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-content-wrapper">
        {/* Featured Post Section */}
        {featuredPost && (
          <section className="featured-section">
            <h2 className="section-heading">Featured Article</h2>
            <Link to={`/blog/${featuredPost.id}`} className="featured-card">
              <div className="featured-image-container">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="featured-image"
                />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="category-tag">{featuredPost.category}</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>

                {/* ✅ Render first paragraph of description */}
                {featuredPost.description?.length > 0 && (
                  <div className="featured-description">
                    {featuredPost.description.slice(0, 2).map((block, i) => (
                      <p key={i}>
                        {block.children?.map((child, j) => child.text).join(" ")}
                      </p>
                    ))}
                  </div>
                )}

                <button className="read-more-button">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </section>
        )}

        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-header">
            <h2 className="section-heading">Recent Articles</h2>
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-tab ${activeFilter === category ? "active" : ""}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid">
          {recentPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
              <div className="blog-card-image-container">
                <img src={post.image} alt={post.title} className="blog-card-image" />
                <div className="image-overlay">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <path d="M10 8l6 4-6 4V8z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="category-tag small">{post.category}</span>
                  <span className="post-date small">{post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                {/* ✅ Show description snippet */}
                {post.description?.length > 0 && (
                  <div className="blog-description-preview">
                    {post.description.slice(0, 1).map((block, i) => (
                      <p key={i}>
                        {block.children?.map((child, j) => child.text).join(" ")}
                      </p>
                    ))}
                  </div>
                )}

                <div className="blog-card-footer">
                  <span className="read-time">{post.readTime}</span>
                  <span className="read-link">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Newsletter Subscription */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">
              Subscribe to our newsletter for the latest insights, tips, and product updates
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
