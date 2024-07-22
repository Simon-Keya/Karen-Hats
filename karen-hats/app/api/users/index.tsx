import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUsers } from '../../utils/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await getUsers();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
