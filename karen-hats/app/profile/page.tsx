// /app/profile/page.tsx

import Orders from '@/components/profile/Orders';
import Profile from '@/components/profile/Profile';
import Rewards from '@/components/profile/Rewards';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <Profile />
      <Orders />
      <Rewards />
    </div>
  );
};

export default ProfilePage;
