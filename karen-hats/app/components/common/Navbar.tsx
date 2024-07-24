import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-2xl font-bold cursor-pointer">Karen Hats</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/products" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Products</span>
            </Link>
          </li>
          <li>
            <Link href="/cart" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Cart</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/admin" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Admin</span>
            </Link>
          </li>
          <li>
            <Link href="/auth/login" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Login</span>
            </Link>
          </li>
          <li>
            <Link href="/auth/register" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Register</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
