import Image from 'next/image';
import React from 'react';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <Image src={product.imageUrl} alt={product.name} width={500} height={500} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetail;
