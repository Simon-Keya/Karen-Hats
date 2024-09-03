import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description?: string;
    price: number | string;
    imageUrl: string;
  };
  showAddToCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showAddToCart }) => {
  const formattedPrice =
    typeof product.price === 'number'
      ? product.price.toFixed(2)
      : parseFloat(product.price).toFixed(2);

  return (
    <Link href={`/products/${product.id}`} passHref legacyBehavior>
      <div className="relative border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
        <span className="relative block w-full h-48">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            layout="fill"
            objectFit="cover"
            className="w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-80"
          />
          <div className="absolute inset-0 bg-transparent" aria-hidden="true"></div>
        </span>
        <div className="p-4 pb-20">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
          {product.description && (
            <p className="text-gray-600 mb-4">{product.description}</p>
          )}
          <p className="text-lg text-gray-800">Ksh {formattedPrice}</p>
        </div>
        {showAddToCart && (
          <button className="absolute bottom-0 left-0 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 flex items-center justify-center transition-all duration-300">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
