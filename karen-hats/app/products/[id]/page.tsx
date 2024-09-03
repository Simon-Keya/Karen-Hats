"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ProductDetail from '../../components/products/ProductDetail';
import { getProductById } from '../../utils/api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Receive params directly as a prop
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = params; // Access the product ID from params

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link href="/products">
        <button className="flex items-center mb-4 text-blue-500 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to Products
        </button>
      </Link>

      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
