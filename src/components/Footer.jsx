import React from 'react';
import './Footer.css';
// Make sure to have your logo asset in the correct path
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top section containing all the navigation links */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="section-title">Product</h3>
          <ul className="footer-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Company</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Support</h3>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="/admin">Admin Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section with logo and copyright info */}
      <div className="footer-bottom">
        <div className="footer-logo-container">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <p className="copyright-text">
          © {new Date().getFullYear()} AutoIntelli. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
