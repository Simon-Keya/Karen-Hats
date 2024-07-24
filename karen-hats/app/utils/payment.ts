import api from './api';

export const processPayment = async (paymentDetails: any) => {
  const response = await api.post('/payments/process', paymentDetails);
  return response.data;
};
