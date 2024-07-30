// src/hooks/useCart.ts
"use client";

import { useEffect, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface UseCartReturn {
  cart: CartItem[];
  removeItemFromCart: (id: string) => void;
}

const useCart = (): UseCartReturn => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart items from local storage or an API
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeItemFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return { cart, removeItemFromCart };
};

export default useCart;
