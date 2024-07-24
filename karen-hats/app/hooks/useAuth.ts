import { useEffect, useState } from 'react';
import { signInWithGoogle as googleSignIn, login, logout, register, forgotPassword as resetPassword } from '../utils/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add logic to fetch user from local storage or API
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const userData = await login(email, password);
    setUser(userData);
  };

  const handleRegister = async (email: string, password: string) => {
    const userData = await register(email, password);
    setUser(userData);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const signInWithGoogle = async () => {
    const userData = await googleSignIn();
    setUser(userData);
  };

  const forgotPassword = async (email: string) => {
    await resetPassword(email);
  };

  return { user, loading, handleLogin, handleRegister, handleLogout, signInWithGoogle, forgotPassword };
};

export default useAuth;
