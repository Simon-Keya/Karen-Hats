import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <a>
          <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
