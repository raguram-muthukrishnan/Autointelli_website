import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogs, fetchWebinars, fetchEvents } from '../api';
import './admin.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    blogs: 0,
    webinars: 0,
    events: 0,
    loading: true
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [blogsData, webinarsData, eventsData] = await Promise.all([
          fetchBlogs(),
          fetchWebinars(),
          fetchEvents()
        ]);
        
        setStats({
          blogs: blogsData.data?.length || 0,
          webinars: webinarsData.data?.length || 0,
          events: eventsData.data?.length || 0,
          loading: false
        });
      } catch (err) {
        console.error('Error loading stats:', err);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    loadStats();
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="modern-dashboard">
      {/* Header Section */}
      <div className="dashboard-header-section">
        <div className="dashboard-welcome">
          <h1>Hi, Admin</h1>
          <p>Ready to start your day managing content?</p>
          <span className="dashboard-date">{currentDate}</span>
        </div>
        <div className="dashboard-illustration">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="80" r="30" fill="#667eea"/>
            <path d="M70 110 Q100 90 130 110 L130 160 Q100 180 70 160 Z" fill="#764ba2"/>
            <rect x="85" y="140" width="30" height="40" rx="15" fill="#ffd700"/>
            <circle cx="85" cy="75" r="3" fill="#fff"/>
            <circle cx="115" cy="75" r="3" fill="#fff"/>
            <path d="M85 90 Q100 100 115 90" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Stats Overview - Bento Grid */}
      <div className="stats-overview">
        <h2 className="section-title">Overview</h2>
        <div className="bento-grid">
          {/* Blogs Stat */}
          <Link to="/admin/dashboard/blogs" className="bento-box bento-yellow">
            <div className="bento-content">
              <div className="bento-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 7H17M7 11H17M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="bento-stats">
                <h3>{stats.loading ? '...' : stats.blogs}</h3>
                <p>Total Blogs</p>
              </div>
            </div>
          </Link>

          {/* Webinars Stat */}
          <Link to="/admin/dashboard/webinars" className="bento-box bento-purple">
            <div className="bento-content">
              <div className="bento-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="bento-stats">
                <h3>{stats.loading ? '...' : stats.webinars}</h3>
                <p>Webinars</p>
              </div>
            </div>
          </Link>

          {/* Events Stat */}
          <Link to="/admin/dashboard/events" className="bento-box bento-pink">
            <div className="bento-content">
              <div className="bento-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="15" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="bento-stats">
                <h3>{stats.loading ? '...' : stats.events}</h3>
                <p>Events</p>
              </div>
            </div>
          </Link>

          {/* Total Content */}
          <div className="bento-box bento-lavender">
            <div className="bento-content">
              <div className="bento-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="bento-stats">
                <h3>{stats.loading ? '...' : stats.blogs + stats.webinars + stats.events}</h3>
                <p>Total Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Bento Style */}
      <div className="quick-actions-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-bento">
          <Link to="/admin/dashboard/blogs" className="action-box action-blog">
            <div className="action-icon-wrapper">
              <div className="action-icon">📝</div>
            </div>
            <div className="action-details">
              <h3>Next in Fashion</h3>
              <p>Sed accusam cupidatat non proident, sunt in culpa qui officia</p>
              <span className="action-meta">10 Slides</span>
            </div>
            <div className="action-badge">
              <span className="badge-text">Public</span>
            </div>
            <div className="action-buttons">
              <button className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18.5 2.5C18.8978 2.1022 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.1022 21.5 2.5C21.8978 2.8978 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.1022 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </Link>

          <Link to="/admin/dashboard/webinars" className="action-box action-webinar">
            <div className="action-icon-wrapper">
              <div className="action-icon">🎥</div>
            </div>
            <div className="action-details">
              <h3>Digital Marketing Today</h3>
              <p>Sed accusam cupidatat non proident, sunt in culpa qui officia</p>
              <span className="action-meta">10 Slides</span>
            </div>
            <div className="action-badge">
              <span className="badge-text private">Private</span>
            </div>
            <div className="action-buttons">
              <button className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18.5 2.5C18.8978 2.1022 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.1022 21.5 2.5C21.8978 2.8978 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.1022 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
