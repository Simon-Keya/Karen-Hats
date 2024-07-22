import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
