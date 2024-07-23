import { useEffect, useState } from 'react';
import api from '../utils/api';

interface Reward {
  id: string;
  description: string;
}

const useRewards = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const response = await api.get('/rewards');
      setRewards(response.data);
    };

    fetchRewards();
  }, []);

  return { rewards };
};

export default useRewards;
