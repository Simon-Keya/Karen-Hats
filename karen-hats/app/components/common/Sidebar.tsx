"use client";

import Link from 'next/link';
import React, { useState } from 'react';

interface Category {
  mavins: string[];
  caps: string[];
  hats: string[];
}

const categories: Category = {
  mavins: ['Category 1', 'Category 2', 'Category 3'],
  caps: ['Category A', 'Category B', 'Category C'],
  hats: ['Category X', 'Category Y', 'Category Z'],
};

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="w-64 bg-gradient-to-r from-gray-500  to-orange-500 text-white h-full p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <ul>
        {Object.keys(categories).map((product) => (
          <li
            key={product}
            className="mb-4"
            onMouseEnter={() => setActiveItem(product)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <div className="cursor-pointer p-2 hover:bg-orange-500 rounded">
              <span className="capitalize">{product}</span>
            </div>
            {activeItem === product && (
              <ul className="ml-4 mt-2">
                {categories[product as keyof Category].map((category: string) => (
                  <li key={category} className="mb-2">
                    <Link href={`/${product}/${category.toLowerCase().replace(' ', '-')}`} passHref>
                      <span className="block p-2 bg-gray-400 hover:bg-gray-400 rounded cursor-pointer">
                        {category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
