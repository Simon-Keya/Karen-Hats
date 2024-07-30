// src/app/products/page.tsx

"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { getProducts } from '../utils/api';

interface Product {
  id: number;
  name: string;
  description?: string; // Optional description
  price: number; // Keep price as number
  imageUrl: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          showAddToCart={true} // Provide the required prop
        />
      ))}
    </div>
  );
};

export default ProductsPage;
