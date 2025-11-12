import { useState, useEffect } from 'react';
import { fetchWebinars, createWebinar } from '../api';
import './admin.css';

const DashboardWebinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadWebinars();
  }, []);

  const loadWebinars = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchWebinars();
      setWebinars(data.data || []);
    } catch (err) {
      setError('Failed to fetch webinars. Make sure Strapi is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      setCreating(true);
      setError('');
      await createWebinar(newTitle);
      setNewTitle('');
      await loadWebinars(); // Refresh the list
    } catch (err) {
      setError('Failed to create webinar. Please try again.');
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="dashboard-page">
      <h1>Manage Webinars</h1>

      <div className="create-form">
        <h2>Add New Webinar</h2>
        <form onSubmit={handleCreate}>
          <div className="form-inline">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter webinar title"
              disabled={creating}
              required
            />
            <button type="submit" disabled={creating} className="btn-primary">
              {creating ? 'Adding...' : 'Add Webinar'}
            </button>
          </div>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="items-list">
        <h2>All Webinars</h2>
        {loading ? (
          <div className="loading">Loading webinars...</div>
        ) : webinars.length === 0 ? (
          <div className="empty-state">No webinars found. Create one above!</div>
        ) : (
          <table className="items-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {webinars.map((webinar) => (
                <tr key={webinar.id}>
                  <td>{webinar.id}</td>
                  <td>{webinar.attributes?.title || 'Untitled'}</td>
                  <td>{new Date(webinar.attributes?.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardWebinars;
