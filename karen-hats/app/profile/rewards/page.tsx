// src/app/profile/rewards/page.tsx
"use client"

// src/app/profile/rewards/page.tsx

import { useEffect, useState } from 'react';

interface Reward {
  id: string;
  description: string;
}

const RewardsPage = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('/api/rewards');
        if (!response.ok) {
          throw new Error('Failed to fetch rewards');
        }
        const rewardsData: Reward[] = await response.json();
        setRewards(rewardsData);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRewards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rewards.length) {
    return <div>No rewards yet</div>;
  }

  return (
    <div>
      <h1>Your Rewards</h1>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>{reward.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsPage;
