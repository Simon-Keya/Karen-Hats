// /app/api/orders/index.ts

import { createOrder, getOrders } from '@/utils/orders';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const orders = await getOrders();
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const newOrder = await createOrder(req.body);
    res.status(201).json(newOrder);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
