import { useSession } from 'next-auth/react';
import Orders from '../../components/profile/Orders';
import Profile from '../../components/profile/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your profile</div>;
  }

  // Assuming session.user has an id property
  const userId = (session.user as { id: string }).id;

  return (
    <div>
      <Profile user={session.user} />
      <Orders userId={userId} />
    </div>
  );
};

export default ProfilePage;
