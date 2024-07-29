import Head from 'next/head';
import React from 'react';
import ProductList from './components/products/ProductList';
import Layout from './layout';

const HomePage: React.FC = () => {
  const products = [
    { id: 1, name: 'Hat 1', price: '$20', imageUrl: '/images/hat1.jpg' },
    { id: 2, name: 'Hat 2', price: '$25', imageUrl: '/images/Black Bucket Hat.png' },
    { id: 3, name: 'Hat 3', price: '$20', imageUrl: '/images/47 New York Yankees MLB Classic Baseball Hat.png' },
    { id: 4, name: 'Hat 4', price: '$25', imageUrl: '/images/2pcs Couple Heart Embroidery Bucket Hat.png' },
    { id: 5, name: 'Hat 5', price: '$30', imageUrl: '/images/21 Types of Hats for Men That Will Boost Your Style _ Dapper Confidential.png' },
    { id: 6, name: 'Hat 6', price: '$20', imageUrl: '/images/1pc Stylish Men Outdoor Camping Sports Hat.png' },
    { id: 7, name: 'Hat 7', price: '$25', imageUrl: '/images/$5 off $50 Sale Special for New Users_Embroidery Smile Face Bucket Hat.png' },
    { id: 8, name: 'Hat 8', price: '$30', imageUrl: '/images/Two Tone Plaid Pattern Bucket Hat.png' },
    { id: 9, name: 'Hat 9', price: '$20', imageUrl: '/images/Adams Headwear - Vacationer Dyed Bucket Hat - Navy _ Large.png' },
    { id: 10, name: 'Hat 10', price: '$25', imageUrl: '/images/Bonnet Moncler Bleu.png' },
    { id: 11, name: 'Hat 11', price: '$30', imageUrl: '/images/AUTUMN Golf Logo Cotton Baseball Cap Sports Golf Snapback Outdoor Simp.png' },
    { id: 12, name: 'Hat 12', price: '$20', imageUrl: '/images/1 Stück Unisex Cap Casual Plain Acryl Baseball Cap Einstellbare Hysteresenhüte für Frauen Männer Hip Hop Cap Street Dad Hat - Rot _ 54cm-62cm.png' },
    { id: 13, name: 'Hat 13', price: '$25', imageUrl: '/images/Bowler (Derby) Wool Hat _ Conner Hats.png' },
    { id: 14, name: 'Hat 14', price: '$30', imageUrl: '/images/Bucket Hat Adidas online _ Hattar.png' },
    { id: 15, name: 'Hat 15', price: '$30', imageUrl: '/images/New York Yankees Hats Caps Aesthetic.png' },
    { id: 16, name: 'Hat 16', price: '$30', imageUrl: '/images/New Era Alabama Crimson Tide Crimson 59FIFTY Fitted Hat.png' },
    { id: 17, name: 'Hat 17', price: '$30', imageUrl: '/images/Nike mens womens Baseball.png' },
    { id: 18, name: 'Hat 18', price: '$30', imageUrl: '/images/Absolute Apparel - Atlantis Brad Slouch Beanie (Grijs).png' },
    { id: 19, name: 'Hat 19', price: '$30', imageUrl: '/images/Bonnet Moncler Bleu.png' },
    { id: 20, name: 'Hat 20', price: '$30', imageUrl: '/images/Boné de beisebol masculino sólido.png' },
    { id: 21, name: 'Hat 21', price: '$30', imageUrl: '/images/Bucket Hats.png' },
    { id: 22, name: 'Hat 22', price: '$30', imageUrl: '/images/C_C Unisex 100% Cotton Packable Reversible Tie Dye Bucket Sun Hat.png' },
    { id: 23, name: 'Hat 23', price: '$30', imageUrl: '/images/Burberry - Vintage Check Cotton Bucket Hat - Mens - Beige Multi.png' },
    { id: 24, name: 'Hat 24', price: '$30', imageUrl: '/images/Chapéu Bucket Hat Smile Feliz.png' },
    // Add more products here
  ];

  const sections = [
    { title: 'Most Viewed Items', link: '/most-viewed', products: products.slice(0, 5), color: 'bg-red-500' },
    { title: 'Top Deals', link: '/top-deals', products: products.slice(5, 10), color: 'bg-blue-500' },
    { title: 'Top Selling Items', link: '/top-selling', products: products.slice(10, 15), color: 'bg-green-500' },
    { title: 'Top Deals for You', link: '/top-deals-for-you', products: products.slice(15, 20), color: 'bg-yellow-500' },
    { title: 'More Deals', link: '/more-deals', products: products.slice(20, 25), color: 'bg-purple-500' },
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
        <ProductList sections={sections} />
      </div>
    </Layout>
  );
};

export default HomePage;
