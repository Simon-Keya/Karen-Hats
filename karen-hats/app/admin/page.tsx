// /app/admin/page.tsx

import Dashboard from '@/components/admin/Dashboard';
import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default AdminPage;
