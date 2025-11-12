import { useState, useEffect } from 'react';
import { fetchEvents, createEvent } from '../api';
import './admin.css';

const DashboardEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchEvents();
      setEvents(data.data || []);
    } catch (err) {
      setError('Failed to fetch events. Make sure Strapi is running.');
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
      await createEvent(newTitle);
      setNewTitle('');
      await loadEvents(); // Refresh the list
    } catch (err) {
      setError('Failed to create event. Please try again.');
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="dashboard-page">
      <h1>Manage Events</h1>

      <div className="create-form">
        <h2>Add New Event</h2>
        <form onSubmit={handleCreate}>
          <div className="form-inline">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter event title"
              disabled={creating}
              required
            />
            <button type="submit" disabled={creating} className="btn-primary">
              {creating ? 'Adding...' : 'Add Event'}
            </button>
          </div>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="items-list">
        <h2>All Events</h2>
        {loading ? (
          <div className="loading">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="empty-state">No events found. Create one above!</div>
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
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.attributes?.title || 'Untitled'}</td>
                  <td>{new Date(event.attributes?.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardEvents;
