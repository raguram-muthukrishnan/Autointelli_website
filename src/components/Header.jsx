import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';


const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle dropdown visibility
  const handleDropdownEnter = (dropdown) => {
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    // Add a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
    setCloseTimeout(timeout);
  };

  // SVG component for the dropdown arrow
  const DropdownIcon = ({ color = '#555' }) => (
    <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      {/* All styles are consolidated here */}      
      <header className="header-container">
        <div className="logo">
          <img src={logo} alt="AUTOINTELLI_LOGO" />
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            
            {/* Products Dropdown */}
            <li 
              className="dropdown-item"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="/products">Products</a>
              <DropdownIcon />
              
              {activeDropdown === 'products' && (
                <div 
                  className="mega-dropdown"
                  onMouseEnter={() => handleDropdownEnter('products')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="mega-dropdown-content">
                    {/* Left Column - Products by Category */}
                    <div className="mega-dropdown-left">
                      <div className="dropdown-section">
                        <h4 className="dropdown-category">Monitoring</h4>
                        <a href="/products/nms" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6366F1" strokeWidth="2"/>
                              <path d="M8 12h8M12 8v8" stroke="#6366F1" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Autointelli NMS</span>
                            <span className="link-description">AI-driven hybrid IT observability platform</span>
                          </div>
                        </a>
                      </div>

                      <div className="dropdown-section">
                        <h4 className="dropdown-category">Automation & Incident Response</h4>
                        <a href="/products/incident-response" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="2"/>
                              <path d="M12 7v5l3 3" stroke="#8B5CF6" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Autointelli OPS DUTY</span>
                            <span className="link-description">Policy-based event aggregation & remediation</span>
                          </div>
                        </a>
                        <a href="/products/flow" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="3" width="7" height="7" rx="1" stroke="#8B5CF6" strokeWidth="2"/>
                              <rect x="14" y="3" width="7" height="7" rx="1" stroke="#8B5CF6" strokeWidth="2"/>
                              <rect x="14" y="14" width="7" height="7" rx="1" stroke="#8B5CF6" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">IntelliFlow</span>
                            <span className="link-description">Automate IT workflows with ease</span>
                          </div>
                        </a>
                      </div>

                      <div className="dropdown-section">
                        <h4 className="dropdown-category">Security & Access</h4>
                        <a href="/products/securita" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" stroke="#EC4899" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Autointelli Securita</span>
                            <span className="link-description">Secure remote access & session management</span>
                          </div>
                        </a>
                      </div>

                      <div className="dropdown-section">
                        <h4 className="dropdown-category">IT Operations & Productivity</h4>
                        <a href="/products/alice-ai" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="8" r="3" stroke="#10B981" strokeWidth="2"/>
                              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#10B981" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Alice AI</span>
                            <span className="link-description">AI-powered digital assistant</span>
                          </div>
                        </a>
                        <a href="/products/it-desk" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#10B981" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">IntelliDesk</span>
                            <span className="link-description">Unified service desk with automation</span>
                          </div>
                        </a>
                        <a href="/products/asset" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#10B981" strokeWidth="2"/>
                              <path d="M9 9h6M9 15h6" stroke="#10B981" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">IntelliAsset</span>
                            <span className="link-description">IT asset & license management</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Right Panel - CTA Section */}
                    <div className="mega-dropdown-right">
                      <div className="dropdown-cta-card">
                        <h3>Explore All Products</h3>
                        <p>Trusted by 100+ Enterprises for 24/7 AI-Powered Monitoring</p>
                        <div className="cta-buttons">
                          <a href="/products" className="cta-primary">View All Products</a>
                          <a href="/contact" className="cta-secondary">Talk to Sales</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            <li><a href="/partners">Partners</a></li>
            
            {/* Resources Dropdown */}
            <li 
              className="dropdown-item"
              onMouseEnter={() => handleDropdownEnter('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="/resources">Resource</a>
              <DropdownIcon />
              
              {activeDropdown === 'resources' && (
                <div 
                  className="mega-dropdown"
                  onMouseEnter={() => handleDropdownEnter('resources')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="mega-dropdown-content">
                    {/* Left Column - Learning Resources */}
                    <div className="mega-dropdown-left">
                      <div className="dropdown-section">
                        <h4 className="dropdown-category">Learning Resources</h4>
                        <a href="/resources/knowledge-base" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="9" stroke="#6366F1" strokeWidth="2"/>
                              <path d="M12 8v4M12 16h.01" stroke="#6366F1" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Knowledge Base</span>
                            <span className="link-description">FAQs, troubleshooting & feature tips</span>
                          </div>
                        </a>
                        <a href="/resources/tutorials" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
                              <path d="M10 8l6 4-6 4V8z" fill="#6366F1"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Product Tutorials</span>
                            <span className="link-description">Step-by-step video walkthroughs</span>
                          </div>
                        </a>
                      </div>

                      <div className="dropdown-section">
                        <h4 className="dropdown-category">Community & Insights</h4>
                        <a href="/blog" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" stroke="#8B5CF6" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Blog / Insights</span>
                            <span className="link-description">Industry updates & AIOps trends</span>
                          </div>
                        </a>
                        <a href="/resources/webinars" className="dropdown-link">
                          <div className="link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <rect x="2" y="7" width="20" height="15" rx="2" stroke="#8B5CF6" strokeWidth="2"/>
                              <path d="M17 2l-5 5-5-5" stroke="#8B5CF6" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="link-content">
                            <span className="link-title">Webinars & Events</span>
                            <span className="link-description">Live sessions with product experts</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Right Panel - CTA Section */}
                    <div className="mega-dropdown-right">
                      <div className="dropdown-cta-card">
                        <h3>Resource Center</h3>
                        <p>Access documentation, tutorials, and expert insights to maximize your Autointelli experience</p>
                        <div className="cta-buttons">
                          <a href="/resources" className="cta-primary">Visit Resource Center</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Desktop Call to Action Button */}
        <a href="/contact">
          <button className="cta-button">
            Get Started
          </button>
        </a>

        {/* --- Mobile Menu Icon --- */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Open menu">
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="26.4314" y1="1.02575" x2="1" y2="1.02575" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="26.4314" y1="11.0444" x2="1" y2="11.0444" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="26.4314" y1="20.9742" x2="1" y2="20.9742" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      {/* --- Mobile Navigation Menu (Overlay) --- */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {/* Adding onClick to links closes the menu after navigation */}
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li className="dropdown-item">
            <a href="/products" onClick={toggleMenu}>Products</a>
            <DropdownIcon color="white" />
          </li>
          <li><a href="/partners" onClick={toggleMenu}>Partners</a></li>
          <li className="dropdown-item">
            <a href="/resources" onClick={toggleMenu}>Resource</a>
            <DropdownIcon color="white" />
          </li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
           <li>
             <a href="/contact" onClick={toggleMenu}>
               <button className="cta-button">
                  Get Started
               </button>
             </a>
           </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

