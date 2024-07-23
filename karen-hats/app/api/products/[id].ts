// src/pages/api/products/index.ts
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
    try {
      // Replace this URL with your backend products endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const products: Product[] = await response.json();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, description, price, stock, category } = req.body;

      // Replace this URL with your backend create product endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, stock, category }),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const product: Product = await response.json();
      res.status(201).json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
