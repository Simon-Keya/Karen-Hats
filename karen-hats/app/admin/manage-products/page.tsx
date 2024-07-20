// /app/admin/manage-products/page.tsx

import ManageProducts from '@/components/admin/ManageProducts';
import React from 'react';

const ManageProductsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ManageProducts />
    </div>
  );
};

export default ManageProductsPage;
