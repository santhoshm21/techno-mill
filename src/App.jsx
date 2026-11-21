import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="products" element={<Navigate to="/#products" replace />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="services" element={<Navigate to="/#services" replace />} />
        <Route path="projects" element={<Navigate to="/#projects" replace />} />
        <Route path="facility" element={<Navigate to="/#facility" replace />} />
        <Route path="clients" element={<Navigate to="/#clients" replace />} />
        <Route path="careers" element={<Navigate to="/#careers" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
