import React from 'react';
import './admin.css';

const DashboardCareers = () => {
  const mockData = [
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'New York', type: 'Full-time' },
  ];

  return (
    <div className="dashboard-section">
      <h2>Careers Management</h2>
      <p>Manage job openings and descriptions.</p>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCareers;
