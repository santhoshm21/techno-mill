import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { QuoteProvider } from '../context/QuoteContext';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function MainLayout() {
  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#1F2937] font-sans antialiased selection:bg-[#F5B800] selection:text-[#1E2227]">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </QuoteProvider>
  );
}
