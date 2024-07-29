import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface Section {
  title: string;
  link: string;
  products: Product[];
  color: string;
}

interface ProductListProps {
  sections: Section[];
}

const ProductList: React.FC<ProductListProps> = ({ sections }) => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <div className={`flex justify-between items-center px-4 py-2 ${section.color} text-white rounded`}>
            <h2 className="text-xl font-bold">{section.title}</h2>
            <Link href={section.link} passHref legacyBehavior>
              <span className="flex items-center cursor-pointer">
                See All <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            {section.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
