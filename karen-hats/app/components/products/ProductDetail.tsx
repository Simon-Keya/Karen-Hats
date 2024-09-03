import Image from 'next/image';
import React from 'react';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    specifications?: { key: string; value: string }[]; // Additional field for specifications
    reviews?: { author: string; content: string; rating: number }[]; // Additional field for reviews
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail container mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="image-section mb-6">
        <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="rounded-lg shadow-md" />
      </div>

      {/* Product Name and Price */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl font-semibold text-green-600 mb-4">${product.price.toFixed(2)}</p>

      {/* Product Description */}
      <div className="description mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{product.description}</p>
      </div>

      {/* Product Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <div className="specifications mb-6">
          <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
          <ul className="list-disc list-inside">
            {product.specifications.map((spec, index) => (
              <li key={index}>
                <strong>{spec.key}:</strong> {spec.value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add to Cart Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 transition-transform duration-300 hover:scale-105">
        Add to Cart
      </button>

      {/* Customer Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="reviews mb-6">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="flex flex-col gap-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="review bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-bold mb-2">{review.author}</p>
                <p>{review.content}</p>
                <p className="mt-2">
                  <strong>Rating:</strong> {review.rating}/5
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products (Placeholder) */}
      <div className="related-products mt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        {/* Placeholder for Related Products */}
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default ProductDetail;


