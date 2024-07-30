"use client";

import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="form-checkbox text-orange-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-600">Remember me</label>
          </div>
          <Button
            onClick={() => {}}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Login
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </Button>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="block w-full text-center text-gray-500 hover:text-gray-700"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
