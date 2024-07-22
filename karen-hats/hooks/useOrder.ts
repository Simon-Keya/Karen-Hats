import { useEffect, useState } from 'react';
import api from '../utils/api';

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get('/orders');
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return { orders };
};

export default useOrders;
