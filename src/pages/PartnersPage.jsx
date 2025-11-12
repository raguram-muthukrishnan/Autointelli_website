import React, { useState } from 'react';
import './PartnersPage.css';

const PartnersPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnerType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.companyName.trim()) formErrors.companyName = "Company name is required";
    if (!formData.contactName.trim()) formErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) formErrors.phone = "Phone number is required";
    if (!formData.partnerType) formErrors.partnerType = "Please select a partner type";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log("Partner inquiry submitted:", formData);
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setFormData({ companyName: '', contactName: '', email: '', phone: '', partnerType: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="partners-page-container">
      <div className="partners-content-wrapper">
        {/* Left Side - Partnership Benefits */}
        <div className="partners-info-section">
          <p className="partners-subtitle">GROW TOGETHER</p>
          <h1 className="partners-title">
            Partner With Autointelli
          </h1>
          <p className="partners-description">
            Being an Autointelli partner, differentiate your customer offerings by aligning with business insights and operational visibility. You can solve customers specific needs with customized AIOps solutions that enhance business performance and transform enterprises into modern organizations. Let us work together to grow businesses and improve customer satisfaction.
          </p>

          {/* Partnership Benefits */}
          <div className="benefits-section">
            <h3 className="benefits-heading">Why Partner With Us</h3>
            
            <div className="benefit-item">
              <div className="benefit-icon revenue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h4 className="benefit-title">Differentiate Customer Offerings</h4>
                <p className="benefit-text">Stand out in the market by offering cutting-edge AIOps solutions that provide business insights and operational visibility to your customers.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon market-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h4 className="benefit-title">Customized AIOps Solutions</h4>
                <p className="benefit-text">Solve customer-specific needs with tailored AIOps solutions that enhance business performance and drive digital transformation.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon support-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h4 className="benefit-title">Enterprise Transformation</h4>
                <p className="benefit-text">Help transform enterprises into modern organizations with advanced operational visibility and intelligent automation.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon marketing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-content">
                <h4 className="benefit-title">Improve Customer Satisfaction</h4>
                <p className="benefit-text">Deliver solutions that enhance business performance and operational efficiency, leading to higher customer satisfaction and retention.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Partner Application Form */}
        <div className="partners-form-section">
          <div className="form-header">
            <h2 className="form-title">Let's Work Together</h2>
            <p className="form-subtitle">Join us in transforming enterprises with intelligent AIOps solutions. Fill out the form below to start the partnership conversation.</p>
          </div>

          <form className="partners-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className={errors.companyName ? 'input-error' : ''}
              />
              {errors.companyName && <span className="error-message">{errors.companyName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contactName">Contact Name</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Your Full Name"
                value={formData.contactName}
                onChange={handleInputChange}
                className={errors.contactName ? 'input-error' : ''}
              />
              {errors.contactName && <span className="error-message">{errors.contactName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Business Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="partnerType">Partner Type</label>
              <select
                id="partnerType"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleInputChange}
                className={errors.partnerType ? 'input-error' : ''}
              >
                <option value="">Select Partner Type</option>
                <option value="reseller">Reseller Partner</option>
                <option value="msp">Managed Service Provider (MSP)</option>
                <option value="system-integrator">System Integrator</option>
                <option value="technology">Technology Partner</option>
                <option value="referral">Referral Partner</option>
                <option value="distributor">Distributor</option>
              </select>
              {errors.partnerType && <span className="error-message">{errors.partnerType}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Business</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share your business focus, target markets, and partnership goals..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isSubmitting ? 'Submitting...' : 'Apply for Partnership'}
            </button>

            {submitSuccess && (
              <div className="success-message">
                Thank you for your interest! Our partner team will review your application and contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
