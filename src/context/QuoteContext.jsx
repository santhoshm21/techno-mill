import React, { createContext, useContext, useState } from 'react';

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ productName: '', sku: '' });

  const openQuoteModal = (toolInfo = {}) => {
    setInitialData({
      productName: toolInfo.productName || toolInfo.name || '',
      sku: toolInfo.sku || ''
    });
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal, initialData }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
