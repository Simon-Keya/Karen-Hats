"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-500 to-orange-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Karen Hats Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-2xl font-bold">Karen Hats</span>
          </div>
        </Link>
        <div className="flex-1 mx-4 flex items-center justify-center mb-4 md:mb-0">
          <div className="relative w-full md:w-3/4 lg:w-2/3 flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full h-10 rounded-l-md"
            />
            <button className="bg-orange-700 text-white h-10 px-6 rounded-r-md ml-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/cart" passHref>
            <div className="flex items-center cursor-pointer">
              <FaShoppingCart className="mr-1" />
              <span>Cart</span>
            </div>
          </Link>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setAccountDropdown(!accountDropdown)}
            >
              <FaUser className="mr-1" />
              <span>Account</span>
              <FaChevronDown className="ml-1" />
            </div>
            {accountDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-10">
                <button className="block w-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-t-lg cursor-pointer">
                  Sign Up
                </button>
                <Link href="/profile" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">My Account</span>
                </Link>
                <Link href="/orders" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</span>
                </Link>
                <Link href="/saved-items" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Saved Items</span>
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setHelpDropdown(!helpDropdown)}
            >
              <FaQuestionCircle className="mr-1" />
              <span>Help</span>
              <FaChevronDown className="ml-1" />
            </div>
            {helpDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-10">
                <Link href="/help-center" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Help Center</span>
                </Link>
                <Link href="/place-order" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Place an Order</span>
                </Link>
                <Link href="/track-order" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Track Your Order</span>
                </Link>
                <Link href="/order-cancellation" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Order Cancellation</span>
                </Link>
                <Link href="/returns-refunds" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Returns & Refunds</span>
                </Link>
                <Link href="/payments" passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Payments</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
