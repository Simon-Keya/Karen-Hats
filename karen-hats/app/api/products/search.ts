// src/pages/api/products/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { query } = req.query;

    if (typeof query !== 'string') {
      res.status(400).json({ error: 'Query parameter is required' });
      return;
    }

    try {
      // Replace this URL with your backend search products endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/search?query=${encodeURIComponent(query)}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to search products');
      }

      const products: Product[] = await response.json();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
