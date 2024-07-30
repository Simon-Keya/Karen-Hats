"use client";

import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleRegister, signInWithGoogle } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          <Button
            onClick={() => {}}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Register
          </Button>
          <Button
            onClick={signInWithGoogle}
            type="button"
            className="w-full flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white"
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
