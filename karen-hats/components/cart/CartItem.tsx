import Image from 'next/image';
import React from 'react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
      <div>
        <h2>{item.name}</h2>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
