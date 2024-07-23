// src/pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: string;
  username: string;
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Replace this URL with your backend users endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users: User[] = await response.json();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
