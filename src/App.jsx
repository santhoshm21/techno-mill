import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Dedicated Standalone Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="careers" element={<Careers />} />

        {/* Home Section Anchors Redirection */}
        <Route path="facility" element={<Navigate to="/#facility" replace />} />
        <Route path="clients" element={<Navigate to="/#clients" replace />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
