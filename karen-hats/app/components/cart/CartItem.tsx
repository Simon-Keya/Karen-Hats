// src/components/cart/CartItem.tsx

import Image from 'next/image';
import React from 'react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string; // Added this for image URL
  };
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
