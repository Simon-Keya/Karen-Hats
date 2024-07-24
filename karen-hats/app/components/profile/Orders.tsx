import React, { useEffect, useState } from 'react';

// Define the props interface with `userId` property
interface OrdersProps {
  userId: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
}

const Orders: React.FC<OrdersProps> = ({ userId }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch orders based on userId
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/orders?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data.orders);
      } catch (err) {
        // Type the error as `Error` and handle it
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
