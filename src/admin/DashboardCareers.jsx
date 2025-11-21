import React from 'react';
import DashboardPageTemplate from './DashboardPageTemplate';

const DashboardCareers = () => {
  const mockData = [
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'New York', type: 'Full-time' },
  ];

  const columns = [
    { header: 'Job Title', accessor: 'title' },
    { header: 'Department', accessor: 'department' },
    { header: 'Location', accessor: 'location' },
    { header: 'Type', accessor: 'type' },
  ];

  return (
    <DashboardPageTemplate
      title="Careers"
      description="Manage job openings and descriptions."
      itemName="Job"
      columns={columns}
      data={mockData}
      onAdd={() => alert('Add Job')}
      onEdit={(item) => alert(`Edit ${item.title}`)}
      onDelete={(item) => alert(`Delete ${item.title}`)}
    />
  );
};

export default DashboardCareers;
