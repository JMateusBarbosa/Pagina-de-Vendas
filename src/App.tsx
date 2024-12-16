import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginPage from './pages/seller/LoginPage';
import AdminLayout from './components/seller/layout/AdminLayout';
import DashboardPage from './pages/seller/DashboardPage';
import ProductsPage from './pages/seller/ProductsPage';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seller/login" element={<LoginPage />} />
          <Route path="/seller" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;