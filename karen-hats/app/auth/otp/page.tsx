// src/app/auth/otp/page.tsx
import OTPForm from '../../components/auth/OTPForm';

const OTP = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
      <OTPForm />
    </div>
  );
};

export default OTP;
