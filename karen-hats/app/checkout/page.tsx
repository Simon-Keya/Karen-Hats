import { useState } from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import useCart from '../../hooks/useCart';

interface Order {
  id: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutPage = () => {
  const { cart: cartItems } = useCart();
  const [order, setOrder] = useState<Order | null>(null);

  const handleOrder = (orderData: Order) => {
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
