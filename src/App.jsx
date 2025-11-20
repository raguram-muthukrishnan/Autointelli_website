import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { initSmoothScroll, destroySmoothScroll } from './utils/smoothScroll';

// Import shared components
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage'; // 1. Import the new template component
import ContactPage from './pages/ContactPage';
import PartnersPage from './pages/PartnersPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import TutorialsPage from './pages/TutorialsPage';
import ResourcesPage from './pages/ResourcesPage';
import WebinarsPage from './pages/WebinarsPage';

// Import admin components
import Login from './admin/Login';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import DashboardBlogs from './admin/DashboardBlogs';
import DashboardWebinars from './admin/DashboardWebinars';
import DashboardEvents from './admin/DashboardEvents';
import ProtectedRoute from './components/ProtectedRoute';

// Component to handle smooth scroll based on route
function SmoothScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Only initialize smooth scroll for non-admin routes
    const isAdminRoute = location.pathname.startsWith('/admin');
    
    if (!isAdminRoute) {
      initSmoothScroll();
    } else {
      destroySmoothScroll();
    }
    
    return () => {
      if (!isAdminRoute) {
        destroySmoothScroll();
      }
    };
  }, [location.pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <SmoothScrollManager />
      <div>
        <Routes>
          {/* Admin Routes - No Header/Footer */}
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="blogs" element={<DashboardBlogs />} />
            <Route path="webinars" element={<DashboardWebinars />} />
            <Route path="events" element={<DashboardEvents />} />
          </Route>

          {/* Public Routes - With Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/kb" element={<KnowledgeBasePage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/webinars" element={<WebinarsPage />} />
                    <Route path="/products/:productId" element={<ProductDetailPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

