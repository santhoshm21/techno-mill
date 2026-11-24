import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { QuoteProvider } from '../context/QuoteContext';

// Scroll to section or top automatically on route changes
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]);

  return null;
}

export default function MainLayout() {
  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#1F2937] font-sans antialiased selection:bg-[#F5B800] selection:text-[#1E2227] w-full max-w-full overflow-x-hidden">
        <ScrollHandler />
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteProvider>
  );
}
