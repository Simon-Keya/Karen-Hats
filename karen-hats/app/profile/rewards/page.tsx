// /app/profile/rewards/page.tsx

import Rewards from '@/components/profile/Rewards';
import React from 'react';

const RewardsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rewards</h1>
      <Rewards />
    </div>
  );
};

export default RewardsPage;
