"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard'; // Adjust the path according to your project structure
import { getProducts } from '../utils/api'; // Adjust the path according to your project structure

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const handleProductClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <ProductCard 
              product={product} 
              showAddToCart={true} // Ensure the prop is provided for the ProductCard component
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
