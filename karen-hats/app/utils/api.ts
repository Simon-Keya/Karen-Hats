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

export const getCartItems = async () => {
  const response = await api.get('/api/cart');
  return response.data;
};

// Fetch user settings
export const fetchUserSettings = async () => {
  const response = await axios.get("/api/users/settings");
  return response.data;
};

// Update user settings
export const updateUserSettings = async (data: { username: string; email: string }) => {
  const response = await axios.put("/api/users/settings", data);
  return response.data;
};

// Fetch admin settings
export const fetchAdminSettings = async () => {
  const response = await axios.get("/api/admin/settings");
  return response.data;
};

// Update admin settings
export const updateAdminSettings = async (data: { siteName: string; contactEmail: string }) => {
  const response = await axios.put("/api/admin/settings", data);
  return response.data;
};

export default api;