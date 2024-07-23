// src/app/layout.tsx
import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react'; // Add session provider if using next-auth
import Head from 'next/head';
import { ReactNode } from 'react';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js Application</title>
        <meta name="description" content="My Next.js application with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <SessionProvider>
          {/* Global layout components like Header, Footer */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
