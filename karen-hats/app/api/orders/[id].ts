// src/pages/api/orders/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Order {
  id: string;
  userId: string;
  productIds: string[];
  total: number;
  status: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid order ID' });
    return;
  }

  if (req.method === 'GET') {
    try {
      // Replace this URL with your backend get order by ID endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch order');
      }

      const order: Order = await response.json();
      res.status(200).json(order);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const { userId, productIds, total, status } = req.body;

      // Replace this URL with your backend update order endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productIds, total, status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      const updatedOrder: Order = await response.json();
      res.status(200).json(updatedOrder);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Replace this URL with your backend delete order endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      res.status(204).end(); // No content on successful delete
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
