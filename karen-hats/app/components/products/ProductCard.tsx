import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number; // Ensure this is always a number
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Ensure price is a number and convert if necessary
  const formattedPrice = typeof product.price === 'number'
    ? product.price.toFixed(2)
    : '0.00'; // Fallback if price is not a number

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <Link href={`/products/${product.id}`} passHref>
        <div className="relative w-full h-48 cursor-pointer">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-transparent" aria-hidden="true"></div>
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700">${formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
