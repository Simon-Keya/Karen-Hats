"use client"

import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { handleLogin, signInWithGoogle, forgotPassword } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <div className="remember-me">
        <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <Button onClick={() => {}} label="Login" type="submit" />
      <Button onClick={handleGoogleSignIn} label="Sign in with Google" type="button" />
      <button type="button" onClick={handleForgotPassword} className="forgot-password">
        Forgot Password?
      </button>
    </form>
  );
};

export default LoginForm;
