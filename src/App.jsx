import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { initSmoothScroll, destroySmoothScroll } from './utils/smoothScroll';

// Import shared components
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

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
import WebinarDetailPage from './pages/WebinarDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import CareersPage from './pages/CareersPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

// Import admin components
import Login from './admin/Login';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import DashboardBlogs from './admin/DashboardBlogs';
import DashboardWebinarsEvents from './admin/DashboardWebinarsEvents';
import DashboardResources from './admin/DashboardResources';
import DashboardCareers from './admin/DashboardCareers';
import DashboardApplications from './admin/DashboardApplications';
import DashboardUsers from './admin/DashboardUsers';
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
            <Route path="webinars-events" element={<DashboardWebinarsEvents />} />
            <Route path="resources" element={<DashboardResources />} />
            <Route path="careers" element={<DashboardCareers />} />
            <Route path="applications" element={<DashboardApplications />} />
            <Route path="users" element={<DashboardUsers />} />
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
                    <Route path="/webinars/:slug" element={<WebinarDetailPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/events/:slug" element={<EventDetailPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/products/:productId" element={<ProductDetailPage />} />
                  </Routes>
                </main>
                <Footer />
                <ChatBot />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

