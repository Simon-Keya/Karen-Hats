import { NextApiRequest, NextApiResponse } from 'next';
import { getProducts } from '../../../utils/products';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const products = await getProducts();
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
