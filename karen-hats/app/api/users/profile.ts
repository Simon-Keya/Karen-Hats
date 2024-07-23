// src/pages/api/users/profile.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface UserProfile {
  id: string;
  username: string;
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch the current user profile
      // Replace this URL with your backend get profile endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${req.headers.authorization}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const profile: UserProfile = await response.json();
      res.status(200).json(profile);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const { username, email } = req.body;

      // Replace this URL with your backend update profile endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${req.headers.authorization}`,
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }

      const updatedProfile: UserProfile = await response.json();
      res.status(200).json(updatedProfile);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
