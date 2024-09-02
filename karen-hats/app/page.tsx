import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCreditCard, FaLock, FaShippingFast, FaStar } from 'react-icons/fa';
import Carousel from './components/carousel/Carousel';
import ProductList from './components/products/ProductList';
import Layout from './layout';

const HomePage: React.FC = () => {
  const imageUrls = [
    '/images/hero-banner.jpg',
    '/images/hat1.jpg',
    '/images/Black Bucket Hat.png',
    '/images/47 New York Yankees MLB Classic Baseball Hat.png',
    '/images/2pcs Couple Heart Embroidery Bucket Hat.png',
    '/images/Two Tone Plaid Pattern Bucket Hat.png',
    '/images/Adams Headwear - Vacationer Dyed Bucket Hat - Navy _ Large.png',
    '/images/Bonnet Moncler Bleu.png',
    '/images/Bowler (Derby) Wool Hat _ Conner Hats.png',
    '/images/Bucket Hat Adidas online _ Hattar.png',
    '/images/New York Yankees Hats Caps Aesthetic.png',
    '/images/New Era Alabama Crimson Tide Crimson 59FIFTY Fitted Hat.png',
    '/images/Nike mens womens Baseball.png',
    '/images/Absolute Apparel - Atlantis Brad Slouch Beanie (Grijs).png',
    '/images/Bonnet Moncler Bleu.png',
    '/images/Boné de beisebol masculino sólido.png',
    '/images/Bucket Hats.png',
    '/images/Unisex Cotton Packable Reversible Tie Dye Bucket Sun Hat.png',
    '/images/Burberry - Vintage Check Cotton Bucket Hat - Mens - Beige Multi.png',
    '/images/Chapéu Bucket Hat Smile Feliz.png'
  ];

  const extractNameFromImageUrl = (url: string): string => {
    const name = url.split('/').pop()?.split('.')[0]?.replace(/[-_]/g, ' ');
    return name ? name : 'Unknown Product';
  };

  const products = imageUrls.map((url, index) => ({
    id: index + 1,
    name: extractNameFromImageUrl(url),
    price: `$${20 + (index % 5) * 5}`,
    imageUrl: url,
    description: '',
  }));

  const sections = [
    {
      title: 'Featured Hats',
      link: '/categories/featured-hats',
      color: 'bg-blue-500',
      products: products.slice(0, 5), // Customize the number of products per section
    },
    {
      title: 'Best Sellers',
      link: '/categories/best-sellers',
      color: 'bg-green-500',
      products: products.slice(5, 10),
    },
    {
      title: 'New Arrivals',
      link: '/categories/new-arrivals',
      color: 'bg-red-500',
      products: products.slice(10, 15),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Karen Hats - Home</title>
        <meta name="description" content="Welcome to Karen Hats, your one-stop shop for all things hats!" />
      </Head>

      {/* Hero Section */}
      <div className="hero relative h-96 flex items-center justify-center text-black">
        <Image
          src={imageUrls[0]}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Hat</h1>
          <p className="text-lg mb-4">Stylish and Comfortable Hats for Every Occasion</p>
          <Link href="/shop">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features flex justify-around py-8 bg-gray-100">
        <Link href="/shipping" className="feature text-center">
          <FaShippingFast className="text-3xl text-blue-500 mx-auto mb-2" />
          <p>Fast Shipping</p>
        </Link>
        <Link href="/payment" className="feature text-center">
          <FaCreditCard className="text-3xl text-green-500 mx-auto mb-2" />
          <p>Secure Payments</p>
        </Link>
        <Link href="/privacy" className="feature text-center">
          <FaLock className="text-3xl text-red-500 mx-auto mb-2" />
          <p>Data Protection</p>
        </Link>
        <Link href="/quality" className="feature text-center">
          <FaStar className="text-3xl text-yellow-500 mx-auto mb-2" />
          <p>Top Quality</p>
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container py-8">
        <Carousel imageUrls={imageUrls.slice(1, 6)} /> {/* Exclude the hero banner */}
      </div>

      {/* Featured Categories */}
      <div className="categories-container py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
        <div className="flex justify-around">
          {['Bucket Hats', 'Baseball Caps', 'Beanies', 'Sun Hats'].map((category, index) => (
            <Link key={index} href={`/categories/${category.toLowerCase().replace(' ', '-')}`}>
              <div className={`category bg-${['blue', 'red', 'green', 'yellow'][index]}-500 text-white text-center py-4 px-6 rounded-lg`}>
                <h3>{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      <div className="container mx-auto py-8">
        <ProductList sections={sections} showAddToCart={true} />
      </div>

      {/* Customer Reviews */}
      <div className="reviews bg-gray-200 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
        <div className="flex justify-around">
          {[
            { text: "Amazing quality and fast delivery!", author: "- John D." },
            { text: "The best hats I've ever bought!", author: "- Sarah W." },
            { text: "Stylish and comfortable, highly recommend!", author: "- Alex K." },
          ].map((review, index) => (
            <div key={index} className="review bg-white p-4 rounded-lg shadow-md">
              <p>{review.text}</p>
              <p className="font-bold mt-2">{review.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded text-gray-700 mb-4"
            required
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
