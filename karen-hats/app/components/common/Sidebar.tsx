import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/admin/dashboard" passHref>
            <span className="block p-2 hover:bg-gray-700 cursor-pointer rounded">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/manage-products" passHref>
            <span className="block p-2 hover:bg-gray-700 cursor-pointer rounded">Manage Products</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/manage-orders" passHref>
            <span className="block p-2 hover:bg-gray-700 cursor-pointer rounded">Manage Orders</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
