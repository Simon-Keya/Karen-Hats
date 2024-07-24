// src/components/products/ProductList.tsx

import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
