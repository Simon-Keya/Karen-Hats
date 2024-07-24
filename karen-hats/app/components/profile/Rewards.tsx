import React from 'react';

interface RewardsProps {
  points: number;
}

const Rewards: React.FC<RewardsProps> = ({ points }) => {
  return (
    <div className="rewards">
      <h2>Reward Points</h2>
      <p>You have {points} points.</p>
    </div>
  );
};

export default Rewards;
