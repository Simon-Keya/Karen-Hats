"use client"

import React from 'react';
import { getOrders } from '../../utils/api';

// Define the type for an order
type Order = {
  id: string;
  date: string;
  total: number;
};

const ManageOrders: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    const fetchOrders = async () => {
      const ordersData: Order[] = await getOrders();
      setOrders(ordersData);
    };
    fetchOrders();
  }, []);

  return (
    <div className="manage-orders">
      <div className="content">
        <h1>Manage Orders</h1>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageOrders;
