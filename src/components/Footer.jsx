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
            <li><a href="/products/nms">NMS</a></li>
            <li><a href="/products/securita">Securita</a></li>
            <li><a href="/products/flow">OPS Duty</a></li>
            <li><a href="/products/flow">Intelliflow</a></li>
            <li><a href="/products/alice-ai">Alice AI</a></li>
            <li><a href="/products/it-desk">IntelliDesk</a></li>
            <li><a href="/products/asset">IntelliAsset</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Company</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Support</h3>
          <ul className="footer-links">
            <li><a href="/kb">Help Center</a></li>
            <li><a href="/contact">Terms of Service</a></li>
            <li><a href="/contact">Privacy Policy</a></li>
            <li><a href="/contact">Status</a></li>
            <li><a href="/admin">Admin Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
