import React, { useState } from 'react';
import { Bell, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

interface AdminHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function AdminHeader({ isMobileMenuOpen, setIsMobileMenuOpen }: AdminHeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/seller/dashboard" className="flex items-center space-x-2">
              <Logo />
              <span className="hidden md:block text-lg font-semibold">Painel do Vendedor</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <Bell size={20} />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown size={16} />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/seller/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Perfil
                  </Link>
                  <Link
                    to="/seller/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}