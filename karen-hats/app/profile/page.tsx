
"use client";

import { useSession } from 'next-auth/react';
import Orders from '../components/profile/Orders';
import Profile from '../components/profile/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <div>Please log in to view your profile</div>;
  }

  const userId = (session.user as { id: string }).id;

  // Define the user object with default values
  const user = {
    name: session.user.name ?? 'Unknown',
    email: session.user.email ?? 'Unknown',
  };

  return (
    <div>
      <Profile user={user} />
      <Orders userId={userId} />
    </div>
  );
};

export default ProfilePage;
