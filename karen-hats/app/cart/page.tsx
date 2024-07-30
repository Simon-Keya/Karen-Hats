// src/app/cart/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import CartItem from '../components/cart/CartItem';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

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
