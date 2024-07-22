import React, { useState } from 'react';
import Button from '../../app/shared/Button';
import Input from '../../app/shared/Input';
import useAuth from '../../hooks/useAuth';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleRegister, signInWithGoogle } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <Button onClick={() => handleSubmit} label="Register" type="submit" />
      <Button onClick={() => signInWithGoogle()} label="Sign in with Google" type="button" />
    </form>
  );
};

export default RegisterForm;
