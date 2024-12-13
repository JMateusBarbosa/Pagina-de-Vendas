import React from 'react';
import Header from './components_client/Header';
import Hero from './components_client/Hero';
import Benefits from './components_client/Benefits';
import Products from './components_client/Products';
import Testimonials from './components_client/Testimonials';
import CTA from './components_client/CTA';
import Footer from './components_client/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;