import { useState } from 'react';
import './ProductsPage.css';
import { productsData } from '../../data/productsData';
import CardSwap, { Card } from '../components/CardSwap';
import { getFeatureIcon } from '../components/FeatureIcons'; 

// Import product images
import nmsImage from '../assets/Products/nms.webp';
import opsDutyImage from '../assets/Products/opsduty.webp';
import intelliFlowImage from '../assets/Products/intelliflow.webp';
import aliceImage from '../assets/Products/alice.png';

// Import images from stockimages folder for Securita, IntelliDesk, and Asset
import securitaImage from '../assets/stockimages/Hypervisor Monitoring.png';
import intelliDeskImage from '../assets/stockimages/ticketing system automation.png';
import assetImage from '../assets/stockimages/Orchestration.png';

const ProductsPage = () => {
  // Hero animation uses these 4 images:
  // 1. nmsImage (nms.webp)
  // 2. opsDutyImage (opsduty.webp) 
  // 3. intelliFlowImage (intelliflow.webp)
  // 4. aliceImage (alice.png)
  
  // Map product IDs to their images
  const productImages = {
    'nms': nmsImage,
    'securita': securitaImage,
    'incident-response': opsDutyImage,
    'flow': intelliFlowImage,
    'alice-ai': aliceImage,
    'it-desk': intelliDeskImage,
    'asset': assetImage
  };

  // State and handlers for the contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Thank you for your message!");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="products-page-container">
      {/* --- Main Page Hero with CardSwap Animation --- */}
      <header className="products-page-hero">
        {/* The content wrapper contains both text and animation */}
        <div className="hero-content-wrapper">
          {/* Text on the left */}
          <div className="hero-text-container">
            <h1 className="products-page-title">{productsData.pageHero.title}</h1>
            <p className="products-page-subtitle">{productsData.pageHero.subtitle}</p>
          </div>
          
          {/* CardSwap animation on the right */}
          <div className="hero-animation-container">
            <CardSwap
              cardDistance={30}
              verticalDistance={35}
              delay={4000}
              width={450}
              height={350}
            >
              {productsData.products.slice(0, 4).map(product => (
                <Card key={product.id}>
                  <div className="card-image-container">
                    <img 
                      src={productImages[product.id] || 'https://placehold.co/450x200/1a202c/fff?text=' + encodeURIComponent(product.name)} 
                      alt={product.name} 
                      className="card-image"
                    />
                  </div>
                  <div className="card-content">
                    <h3>{product.name}</h3>
                    <p>{product.hero?.tagline || 'Discover powerful IT solutions'}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </header>

      {/* --- The rest of the page remains the same --- */}
       <main className="products-list">
        {productsData.products.map((product) => (
          <section key={product.id} className="product-section">
            <div className="product-hero-content">
              <div className="product-text-content">
                <h2 className="product-name">{product.name}</h2>
                <h3 className="product-tagline">{product.hero?.headline || product.hero?.tagline || 'Advanced IT Solutions'}</h3>
                <p className="product-description">{product.hero?.subheadline || product.intro?.solution || 'Comprehensive IT solutions designed to optimize your operations and enhance efficiency.'}</p>
                <a href={product.slug} className="learn-more-link">Learn More &rarr;</a>
              </div>
              <div className="product-image-content">
                <img src={productImages[product.id] || 'https://placehold.co/600x450/1a202c/fff?text=' + encodeURIComponent(product.name)} alt={`${product.name} illustration`} className="product-hero-image" />
              </div>
            </div>

            <div className="product-details">
              <p className="product-summary">{product.platformOverview?.summary || product.intro?.solution || 'Discover how this powerful solution can transform your IT operations and drive business success.'}</p>
              <div className="features-grid">
                {(product.keyFeatures?.features || []).slice(0, 4).map((feature, idx) => {
                  return (
                    <div key={idx} className="feature-card">
                      <div className="feature-icon">{getFeatureIcon(feature.title, feature.description, idx)}</div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>

      <section className="cta-section">
        <h2 className="cta-title">Ready to Transform Your IT Operations?</h2>
        <p className="cta-subtitle">Let's talk about how Autointelli can help you achieve your goals. Request a demo or reach out with your questions.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <button className="contact-page-button" style={{
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #F0CE1D 0%, #F8E064 100%)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Sk-Modernist', sans-serif",
              color: '#212529'
            }}>
              Visit Our Contact Page
            </button>
          </a>
        </div>
        <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '30px', fontSize: '14px' }}>Or send us a quick message below:</p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ProductsPage;

