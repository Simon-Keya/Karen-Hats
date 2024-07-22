import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li><Link href="/admin"><a>Dashboard</a></Link></li>
        <li><Link href="/admin/manage-products"><a>Manage Products</a></Link></li>
        <li><Link href="/admin/manage-orders"><a>Manage Orders</a></Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
