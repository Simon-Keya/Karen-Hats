import { useState } from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import { useCart } from '../../hooks/useCart';

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [order, setOrder] = useState(null);

  const handleOrder = (orderData) => {
    setOrder(orderData);
  };

  if (!cartItems.length) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      {order ? (
        <div>Order placed successfully. Your order number is {order.id}</div>
      ) : (
        <CheckoutForm cartItems={cartItems} onOrderPlaced={handleOrder} />
      )}
    </div>
  );
};

export default CheckoutPage;
