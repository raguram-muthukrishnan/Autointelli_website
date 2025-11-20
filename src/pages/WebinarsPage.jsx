import React, { useState } from 'react';
import './WebinarsPage.css';
import { Link } from 'react-router-dom';

const WebinarsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const webinars = [
    {
      id: 1,
      title: 'Getting Started with Autointelli NMS',
      description: 'Learn the basics of network monitoring and observability with Autointelli NMS',
      category: 'monitoring',
      date: '2024-12-15',
      time: '2:00 PM EST',
      speaker: 'John Smith',
      image: 'https://via.placeholder.com/400x250?text=NMS+Webinar'
    },
    {
      id: 2,
      title: 'Automating IT Operations with IntelliFlow',
      description: 'Discover how to automate complex IT workflows and reduce manual tasks',
      category: 'automation',
      date: '2024-12-20',
      time: '3:00 PM EST',
      speaker: 'Sarah Johnson',
      image: 'https://via.placeholder.com/400x250?text=IntelliFlow+Webinar'
    },
    {
      id: 3,
      title: 'Security Best Practices with Autointelli Securita',
      description: 'Secure remote access and session management best practices',
      category: 'security',
      date: '2024-12-22',
      time: '1:00 PM EST',
      speaker: 'Mike Davis',
      image: 'https://via.placeholder.com/400x250?text=Securita+Webinar'
    },
    {
      id: 4,
      title: 'AI-Powered Support with Alice AI',
      description: 'Leverage AI to provide intelligent self-service support to your users',
      category: 'ai',
      date: '2024-12-25',
      time: '4:00 PM EST',
      speaker: 'Emily Chen',
      image: 'https://via.placeholder.com/400x250?text=Alice+AI+Webinar'
    },
    {
      id: 5,
      title: 'IT Asset Management Strategies',
      description: 'Optimize your IT asset lifecycle and reduce costs',
      category: 'assets',
      date: '2024-12-28',
      time: '2:30 PM EST',
      speaker: 'Robert Wilson',
      image: 'https://via.placeholder.com/400x250?text=Asset+Management+Webinar'
    },
    {
      id: 6,
      title: 'Building a Modern Service Desk',
      description: 'Transform your IT service desk with modern tools and practices',
      category: 'servicedesk',
      date: '2024-12-30',
      time: '3:30 PM EST',
      speaker: 'Lisa Anderson',
      image: 'https://via.placeholder.com/400x250?text=Service+Desk+Webinar'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Webinars' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'automation', label: 'Automation' },
    { id: 'security', label: 'Security' },
    { id: 'ai', label: 'AI & Self-Service' },
    { id: 'assets', label: 'Asset Management' },
    { id: 'servicedesk', label: 'Service Desk' }
  ];

  const filteredWebinars = selectedCategory === 'all' 
    ? webinars 
    : webinars.filter(w => w.category === selectedCategory);

  return (
    <div className="webinars-page-container">
      <section className="webinars-hero">
        <h1>Webinars & Events</h1>
        <p>Join our expert-led sessions to learn best practices and maximize your Autointelli experience</p>
      </section>

      <section className="webinars-content">
        <div className="webinars-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="webinars-grid">
          {filteredWebinars.map(webinar => (
            <div key={webinar.id} className="webinar-card">
              <div className="webinar-image">
                <img src={webinar.image} alt={webinar.title} />
              </div>
              <div className="webinar-content">
                <h3>{webinar.title}</h3>
                <p className="webinar-description">{webinar.description}</p>
                <div className="webinar-meta">
                  <span className="webinar-date">{new Date(webinar.date).toLocaleDateString()}</span>
                  <span className="webinar-time">{webinar.time}</span>
                </div>
                <p className="webinar-speaker">Speaker: {webinar.speaker}</p>
                <button className="webinar-register-btn">Register Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="webinars-cta">
        <h2>Can't find what you're looking for?</h2>
        <p>Contact our team to schedule a custom training session for your organization</p>
        <Link to="/contact" className="webinars-cta-button">Get in Touch</Link>
      </section>
    </div>
  );
};

export default WebinarsPage;
