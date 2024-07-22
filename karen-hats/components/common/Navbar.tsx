import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/"><a className="navbar-brand">Karen Hats</a></Link>
      <ul className="navbar-nav">
        <li><Link href="/products"><a>Products</a></Link></li>
        <li><Link href="/cart"><a>Cart</a></Link></li>
        <li><Link href="/profile"><a>Profile</a></Link></li>
        <li><Link href="/admin"><a>Admin</a></Link></li>
        <li><Link href="/auth/login"><a>Login</a></Link></li>
        <li><Link href="/auth/register"><a>Register</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
