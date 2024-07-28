// src/components/Cart.tsx

import { useEffect, useState } from 'react';
import { getCartItems } from '../../utils/api'; // Make sure this function is implemented correctly

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
