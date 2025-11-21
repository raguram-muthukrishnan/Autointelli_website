import React, { useState } from 'react';
import './CareersPage.css';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    'Engineering',
    'Product',
    'Sales',
    'Marketing',
    'Customer Success',
    'People & Operations'
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Backend Developer (Node.js)',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Product Manager - AIOps',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Enterprise Account Executive',
      department: 'Sales',
      location: 'London, UK',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote (Global)',
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Austin, TX',
      type: 'Full-time'
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote (EU)',
      type: 'Full-time'
    },
    {
      id: 8,
      title: 'HR Business Partner',
      department: 'People & Operations',
      location: 'New York, NY',
      type: 'Full-time'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="careers-page-container">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1>Build the Future of AIOps</h1>
          <p>Join a team of innovators, problem solvers, and thinkers who are redefining IT operations.</p>
          <div className="job-search-bar">
            <input 
              type="text" 
              placeholder="Search for roles (e.g. Engineer, Sales)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">Search Jobs</button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="careers-values">
        <div className="section-header">
          <h2>Why Autointelli?</h2>
          <p>We're building something special, and we want you to be a part of it.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Innovation First</h3>
            <p>We push boundaries and challenge the status quo. Your ideas matter here.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Collaborative Culture</h3>
            <p>We win together. We support each other and celebrate shared success.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Global Impact</h3>
            <p>Our software powers critical infrastructure for enterprises around the world.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚖️</div>
            <h3>Work-Life Balance</h3>
            <p>We believe in working smart and taking time to recharge.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-benefits">
        <div className="benefits-container">
          <div className="benefits-text">
            <h2>Perks & Benefits</h2>
            <p>We take care of our team so they can take care of our customers.</p>
            <ul className="benefits-list">
              <li>Competitive Salary & Equity</li>
              <li>Comprehensive Health Insurance</li>
              <li>Unlimited PTO & Holidays</li>
              <li>Remote-First Options</li>
              <li>Learning & Development Budget</li>
              <li>Home Office Stipend</li>
            </ul>
          </div>
          <div className="benefits-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working together" />
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="careers-jobs" id="open-roles">
        <div className="section-header">
          <h2>Open Positions</h2>
          <p>Find your next challenge.</p>
        </div>

        <div className="jobs-filter-tabs">
          {departments.map(dept => (
            <button 
              key={dept} 
              className={`dept-tab ${selectedDepartment === dept ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-dept">{job.department}</span>
                    <span className="job-loc">{job.location}</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))
          ) : (
            <div className="no-jobs">
              <p>No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <h2>Don't see the right role?</h2>
        <p>We're always looking for talent. Send us your resume and we'll keep you in mind.</p>
        <Link to="/contact" className="cta-button-outline">Contact Us</Link>
      </section>
    </div>
  );
};

export default CareersPage;
