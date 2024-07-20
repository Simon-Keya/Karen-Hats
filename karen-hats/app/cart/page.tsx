// /app/cart/page.tsx

import React from 'react';
import Cart from '../../components/cart/Cart';

const CartPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
