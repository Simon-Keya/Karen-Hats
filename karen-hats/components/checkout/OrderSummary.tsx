import Image from 'next/image';
import React from 'react';

interface OrderSummaryProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {items.map(item => (
        <div key={item.id} className="order-item">
          <Image src={item.imageUrl} alt={item.name} width={50} height={50} />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price.toFixed(2)} x {item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="order-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default OrderSummary;
