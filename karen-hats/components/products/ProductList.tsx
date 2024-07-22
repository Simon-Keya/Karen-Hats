import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
