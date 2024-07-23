// src/pages/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Optionally handle token invalidation or session management here

      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
