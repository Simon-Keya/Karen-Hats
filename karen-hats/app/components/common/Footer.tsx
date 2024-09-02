// src/components/common/Footer.tsx

"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';

const Footer: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Karen Hats</h2>
            <p className="text-gray-400">© 2024 Karen Hats. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><span onClick={() => handleNavigation('/')} className="cursor-pointer hover:text-gray-400">Home</span></li>
                <li><span onClick={() => handleNavigation('/products')} className="cursor-pointer hover:text-gray-400">Products</span></li>
                <li><span onClick={() => handleNavigation('/cart')} className="cursor-pointer hover:text-gray-400">Cart</span></li>
                <li><span onClick={() => handleNavigation('/profile')} className="cursor-pointer hover:text-gray-400">Profile</span></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><IoLocationSharp className="text-xl" /> 1234 Main St, City, Country</li>
                <li className="flex items-center gap-2"><ImMail4 className="text-xl" /> contact@karenhats.com</li>
                <li className="flex items-center gap-2"><span onClick={() => window.location.href = 'tel:+1234567890'} className="cursor-pointer hover:text-gray-400">+1 (234) 567-890</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <span onClick={() => window.open('https://facebook.com', '_blank')} className="cursor-pointer hover:text-gray-400">
                  <FaFacebook className="text-2xl" />
                </span>
                <span onClick={() => window.open('https://twitter.com', '_blank')} className="cursor-pointer hover:text-gray-400">
                  <FaTwitter className="text-2xl" />
                </span>
                <span onClick={() => window.open('https://instagram.com', '_blank')} className="cursor-pointer hover:text-gray-400">
                  <FaInstagram className="text-2xl" />
                </span>
                <span onClick={() => window.open('https://linkedin.com', '_blank')} className="cursor-pointer hover:text-gray-400">
                  <FaLinkedin className="text-2xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">Created with ♥ by Simon Keya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
