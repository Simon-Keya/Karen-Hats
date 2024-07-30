"use client"

import React from 'react';
import { getProducts } from '../../utils/api';

// Define the type for a product
type Product = {
  id: string;
  name: string;
  price: number;
};

const ManageProducts: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const productsData: Product[] = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="manage-products">
      <div className="content">
        <h1>Manage Products</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageProducts;
