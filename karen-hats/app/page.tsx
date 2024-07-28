import Head from 'next/head';
import React from 'react';
import ProductList from './components/products/ProductList';
import Layout from './layout';

const HomePage: React.FC = () => {
  const products = [
    { id: 1, name: 'Hat 1', price: '$20', imageUrl: '/images/hat1.jpg' },
    { id: 2, name: 'Hat 2', price: '$25', imageUrl: '/images/hat2.jpg' },
    { id: 3, name: 'Hat 3', price: '$30', imageUrl: '/images/hat3.jpg' },
  ];

  return (
    <Layout>
      <Head>
        <title>Karen Hats - Home</title>
        <meta name="description" content="Welcome to Karen Hats, your one-stop shop for all things hats!" />
      </Head>
      <div className="container mx-auto py-8 bg-gradient-to-r from-gray-700 via-gray-500 to-orange-700 text-black md:px-4 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Welcome to Karen Hats</h1>
        <p className="text-lg mb-6">We offer a wide variety of hats for all occasions. Browse our selection of:</p>
        <ProductList products={products} />
      </div>
    </Layout>
  );
};

export default HomePage;
