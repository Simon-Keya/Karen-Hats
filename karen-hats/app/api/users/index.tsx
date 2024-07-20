// /app/api/users/index.ts

import { createUser, getUser } from '@/utils/users';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await getUser();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
