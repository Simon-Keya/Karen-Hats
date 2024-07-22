import CartItem from '../../components/cart/CartItem';
import { useCart } from '../../hooks/useCart';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
      ))}
      <div>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</div>
    </div>
  );
};

export default CartPage;
