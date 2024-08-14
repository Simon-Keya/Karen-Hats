// src/app/auth/change-password/page.tsx
import ChangePasswordForm from '../../components/auth/ChangePassword';

const ChangePassword = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
