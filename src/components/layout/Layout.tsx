import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SimpleChatbot from '@/components/SimpleChatbot';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SimpleChatbot />

    </div>
  );
}