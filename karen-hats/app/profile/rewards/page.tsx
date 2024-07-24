import useRewards from '../../hooks/useRewards';

interface Reward {
  id: string;
  description: string;
}

const RewardsPage = () => {
  const { rewards } = useRewards();

  if (!rewards.length) {
    return <div>No rewards yet</div>;
  }

  return (
    <div>
      <h1>Your Rewards</h1>
      <ul>
        {rewards.map((reward: Reward) => (
          <li key={reward.id}>{reward.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsPage;
