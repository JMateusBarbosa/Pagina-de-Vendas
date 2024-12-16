import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex pt-16">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} />
        <main className="flex-1 p-6 lg:ml-64 mt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}