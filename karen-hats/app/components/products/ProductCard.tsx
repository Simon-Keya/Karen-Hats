// src/components/products/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number | string;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = typeof product.price === 'number'
    ? product.price.toFixed(2)
    : parseFloat(product.price).toFixed(2);

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <Link href={`/products/${product.id}`} passHref>
        <div className="relative w-full h-48 cursor-pointer">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill
            style={{ objectFit: 'cover' }} 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-transparent" aria-hidden="true"></div>
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-200">{product.name}</h2>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <p className="text-lg text-gray-300">KSH {formattedPrice}</p>
        <button className="mt-4 w-full bg-white hover:bg-orange-500 text-black font-bold py-2 px-4 rounded flex items-center justify-center">
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
