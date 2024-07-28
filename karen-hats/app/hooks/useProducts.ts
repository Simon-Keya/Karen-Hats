"use client"

import { useEffect, useState } from 'react';
import api from '../utils/api';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return { products };
};

export default useProducts;
