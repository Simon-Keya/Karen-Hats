// /app/checkout/page.tsx

import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
