import React, { useState } from 'react';
import Button from '../../app/shared/Button';
import Input from '../../app/shared/Input';
import { createOrder } from '../../utils/api';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      name,
      address,
      cardNumber,
      expiryDate,
      cvv,
    };
    await createOrder(orderData);
    // Handle success or error
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" />
      <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" type="text" />
      <Input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number" type="text" />
      <Input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="Expiry Date" type="text" />
      <Input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" type="text" />
      <Button onClick={() => {}} label="Place Order" type="submit" />
    </form>
  );
};

export default CheckoutForm;
