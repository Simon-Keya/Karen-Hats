import Head from 'next/head';
import React from 'react';
import ProductList from './components/products/ProductList';
import Layout from './layout';

// Function to extract and shorten product name from the image URL
const extractNameFromImageUrl = (url: string) => {
  const filename = url.split('/').pop()?.split('.')[0];
  return filename ? filename.replace(/_/g, ' ').split(' ').slice(0, 3).join(' ') : 'Unknown';
};

const HomePage: React.FC = () => {
  const imageUrls = [
    '/images/hat1.jpg',
    '/images/Black Bucket Hat.png',
    '/images/47 New York Yankees MLB Classic Baseball Hat.png',
    '/images/2pcs Couple Heart Embroidery Bucket Hat.png',
    '/images/21 Types of Hats for Men That Will Boost Your Style _ Dapper Confidential.png',
    '/images/1pc Stylish Men Outdoor Camping Sports Hat.png',
    '/images/$5 off $50 Sale Special for New Users_Embroidery Smile Face Bucket Hat.png',
    '/images/Two Tone Plaid Pattern Bucket Hat.png',
    '/images/Adams Headwear - Vacationer Dyed Bucket Hat - Navy _ Large.png',
    '/images/Bonnet Moncler Bleu.png',
    '/images/AUTUMN Golf Logo Cotton Baseball Cap Sports Golf Snapback Outdoor Simp.png',
    '/images/1 Stück Unisex Cap Casual Plain Acryl Baseball Cap Einstellbare Hysteresenhüte für Frauen Männer Hip Hop Cap Street Dad Hat - Rot _ 54cm-62cm.png',
    '/images/Bowler (Derby) Wool Hat _ Conner Hats.png',
    '/images/Bucket Hat Adidas online _ Hattar.png',
    '/images/New York Yankees Hats Caps Aesthetic.png',
    '/images/New Era Alabama Crimson Tide Crimson 59FIFTY Fitted Hat.png',
    '/images/Nike mens womens Baseball.png',
    '/images/Absolute Apparel - Atlantis Brad Slouch Beanie (Grijs).png',
    '/images/Bonnet Moncler Bleu.png',
    '/images/Boné de beisebol masculino sólido.png',
    '/images/Bucket Hats.png',
    '/images/C_C Unisex 100% Cotton Packable Reversible Tie Dye Bucket Sun Hat.png',
    '/images/Burberry - Vintage Check Cotton Bucket Hat - Mens - Beige Multi.png',
    '/images/Chapéu Bucket Hat Smile Feliz.png'
  ];

  const products = imageUrls.map((url, index) => ({
    id: index + 1,
    name: extractNameFromImageUrl(url),
    price: '$' + (20 + (index % 5) * 5),
    imageUrl: url,
    description: '' // Provide an empty string as description
  }));

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
        <ProductList sections={sections} showAddToCart={false} /> {/* Pass showAddToCart={false} */}
      </div>
    </Layout>
  );
};

export default HomePage;
