import React from 'react';

interface ProfileProps {
  user: {
    name: string;
    email: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
