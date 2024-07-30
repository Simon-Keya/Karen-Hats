// src/app/cart/page.tsx
"use client"

// src/app/cart/page.tsx

import React from 'react';
import CartItem from '../components/cart/CartItem';

interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Ensure this is included
}

const CartPage: React.FC = () => {
  // Mock cart data - replace with actual data fetching logic
  const [cart, setCart] = React.useState<CartItemType[]>([
    // Example cart item, make sure to fetch and set real data
    {
      id: '1',
      name: 'Example Product',
      price: 10.00,
      quantity: 1,
      imageUrl: '/path/to/image.jpg', // Ensure the URL is correct
    },
  ]);

  const removeItemFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={() => removeItemFromCart(item.id)} />
      ))}
      <div>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</div>
    </div>
  );
};

export default CartPage;
