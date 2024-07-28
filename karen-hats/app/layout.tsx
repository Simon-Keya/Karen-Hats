import { ReactNode } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <div className="container mx-auto mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <Sidebar />
          <main className="flex-1 p-6 bg-white rounded-lg shadow-md">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
