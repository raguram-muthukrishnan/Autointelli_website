const BASE_URL = 'http://localhost:1337/api';

// Generic fetch helper
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Blogs
export const fetchBlogs = async () => {
  return await apiFetch('/blogs?populate=*');
};

export const createBlog = async (title) => {
  return await apiFetch('/blogs', {
    method: 'POST',
    body: JSON.stringify({
      data: { title }
    }),
  });
};

// Webinars
export const fetchWebinars = async () => {
  return await apiFetch('/webinars?populate=*');
};

export const createWebinar = async (title) => {
  return await apiFetch('/webinars', {
    method: 'POST',
    body: JSON.stringify({
      data: { title }
    }),
  });
};

// Events
export const fetchEvents = async () => {
  return await apiFetch('/events?populate=*');
};

export const createEvent = async (title) => {
  return await apiFetch('/events', {
    method: 'POST',
    body: JSON.stringify({
      data: { title }
    }),
  });
};
