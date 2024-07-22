import { useEffect, useState } from 'react';
import api from '../utils/api';

const useRewards = () => {
  const [rewards, setRewards] = useState([]);

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
