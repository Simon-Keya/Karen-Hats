// /app/admin/manage-orders/page.tsx

import ManageOrders from '@/components/admin/ManageOrders';
import React from 'react';

const ManageOrdersPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <ManageOrders />
    </div>
  );
};

export default ManageOrdersPage;
