import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">DigiBooks</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-orange-500">Home</a>
            <a href="#products" className="text-gray-600 hover:text-orange-500">Produtos</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500">Contato</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Comprar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-orange-500">Home</a>
              <a href="#products" className="text-gray-600 hover:text-orange-500">Produtos</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500">Contato</a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Comprar Agora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}