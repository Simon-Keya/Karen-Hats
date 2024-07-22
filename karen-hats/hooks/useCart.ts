import { useEffect, useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Add logic to fetch cart from local storage or API
  }, []);

  const addItemToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addItemToCart, removeItemFromCart, clearCart };
};

export default useCart;
