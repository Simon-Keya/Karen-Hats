import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



export const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get('/api/orders');
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await axios.post('/api/orders', orderData);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

export const createUser = async (userData: any) => {
  const response = await axios.post('/api/users', userData);
  return response.data;
};

export default api;