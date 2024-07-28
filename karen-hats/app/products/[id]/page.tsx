"use client"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductById } from '../../utils/api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Assuming you have an imageUrl property
}

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productData = await getProductById(id as string);
        setProduct(productData);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
