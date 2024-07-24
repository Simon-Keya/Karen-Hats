// src/app/page.tsx

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
      <div className="container mx-auto py-8">
        <Head>
          <title>Karen Hats - Home</title>
          <meta name="description" content="Welcome to Karen Hats, your one-stop shop for all things hats!" />
        </Head>
        <h1>Welcome to Karen Hats</h1>
        <p>We offer a wide variety of hats for all occasions. Browse our selection of:</p>
        <ProductList products={products} />
      </div>
    </Layout>
  );
};

export default HomePage;
