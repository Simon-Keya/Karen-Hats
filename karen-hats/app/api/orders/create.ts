// src/pages/api/orders/create.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Order {
  id: string;
  userId: string;
  productIds: string[];
  total: number;
  status: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, productIds, total, status } = req.body;

      // Replace this URL with your backend create order endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productIds, total, status }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order: Order = await response.json();
      res.status(201).json(order);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
