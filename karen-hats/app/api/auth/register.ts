// src/pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface RegisterResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password, email } = req.body;

      // Replace this URL with your backend register endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data: RegisterResponse = await response.json();
      
      // Send the response to the client
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
