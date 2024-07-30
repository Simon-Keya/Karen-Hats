// shared/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', className, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
