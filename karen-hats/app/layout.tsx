import { ReactNode } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Header />
        <div className="container mx-auto mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <main className="flex-1 p-6 bg-gray-300 rounded-lg shadow-md">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;