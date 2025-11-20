import React from 'react';
import './ResourcesPage.css';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const getIcon = (type) => {
    const icons = {
      kb: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5a2.5 2.5 0 0 0-2.5 2.5v1" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7v6M9 10h6" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tutorials: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#F0CE1D" strokeWidth="2"/>
          <path d="M10 8l6 4-6 4V8z" fill="#F0CE1D"/>
        </svg>
      ),
      blog: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3z" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      webinars: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="15" rx="2" stroke="#F0CE1D" strokeWidth="2"/>
          <path d="M17 2l-5 5-5-5" stroke="#F0CE1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[type];
  };

  const resources = [
    {
      id: 1,
      title: 'Knowledge Base',
      description: 'FAQs, troubleshooting guides, and feature documentation',
      iconType: 'kb',
      link: '/kb'
    },
    {
      id: 2,
      title: 'Product Tutorials',
      description: 'Step-by-step video walkthroughs and getting started guides',
      iconType: 'tutorials',
      link: '/tutorials'
    },
    {
      id: 3,
      title: 'Blog & Insights',
      description: 'Industry updates, best practices, and AIOps trends',
      iconType: 'blog',
      link: '/blog'
    },
    {
      id: 4,
      title: 'Webinars & Events',
      description: 'Live sessions with product experts and industry leaders',
      iconType: 'webinars',
      link: '/blog'
    }
  ];

  return (
    <div className="resources-page-container">
      <section className="resources-hero">
        <h1>Resource Center</h1>
        <p>Access documentation, tutorials, and expert insights to maximize your Autointelli experience</p>
      </section>

      <section className="resources-grid">
        {resources.map((resource) => (
          <Link key={resource.id} to={resource.link} className="resource-card">
            <div className="resource-icon">{getIcon(resource.iconType)}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <span className="resource-link">Learn More →</span>
          </Link>
        ))}
      </section>

      <section className="resources-cta">
        <h2>Need Additional Support?</h2>
        <p>Our support team is here to help you succeed with Autointelli</p>
        <Link to="/contact" className="resources-cta-button">Contact Support</Link>
      </section>
    </div>
  );
};

export default ResourcesPage;
