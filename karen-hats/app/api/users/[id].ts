// src/pages/api/users/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: string;
  username: string;
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  if (req.method === 'GET') {
    try {
      // Replace this URL with your backend get user by ID endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const user: User = await response.json();
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const { username, email } = req.body;

      // Replace this URL with your backend update user endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const updatedUser: User = await response.json();
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Replace this URL with your backend delete user endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
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
