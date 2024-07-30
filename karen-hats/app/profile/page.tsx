'use client';

import LoginForm from '../components/auth/LoginForm'; // Ensure the correct path
import Orders from '../components/profile/Orders';
import Profile from '../components/profile/Profile';

const ProfilePage = () => {
  // Assuming you handle user data differently now, or you can mock data
  const user = {
    name: 'Guest User', // Default user name or handle it based on your logic
    email: 'guest@example.com', // Default email or handle it based on your logic
  };

  return (
    <div>
      {/* Render Login and Register Forms directly or based on any conditions */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
          <p className="mb-4">You need to be logged in to view this page.</p>
          <div className="flex flex-col gap-6">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Optional: Render Profile and Orders components */}
      <div className="container mx-auto p-6">
        <Profile user={user} />
        <Orders userId="mockUserId" /> {/* Provide mock or default user ID */}
      </div>
    </div>
  );
};

export default ProfilePage;
