// /app/page.tsx

import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Karen Hats</h1>
      <p className="mb-4">Your one-stop shop for all kinds of hats, caps, and mavins.</p>
      <Link href="/products">
        <a className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</a>
      </Link>
    </div>
  );
};

export default HomePage;
