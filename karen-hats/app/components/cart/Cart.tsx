import React from 'react';
import CartItem from './CartItem';

interface CartProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {items.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
