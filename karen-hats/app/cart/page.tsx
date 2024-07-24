import React from 'react';
import CartItem from '../components/cart/CartItem';
import useCart from '../hooks/useCart'; // Corrected import statement

const CartPage: React.FC = () => {
  const { cart, removeItemFromCart } = useCart();

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
