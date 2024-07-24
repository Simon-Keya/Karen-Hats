import React from 'react';
import Sidebar from '../common/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
