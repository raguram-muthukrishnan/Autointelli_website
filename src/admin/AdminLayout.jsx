import { Link, Outlet, useNavigate } from 'react-router-dom';
import './admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/admin/dashboard/blogs" className="nav-link">
            Blogs
          </Link>
          <Link to="/admin/dashboard/webinars" className="nav-link">
            Webinars
          </Link>
          <Link to="/admin/dashboard/events" className="nav-link">
            Events
          </Link>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
