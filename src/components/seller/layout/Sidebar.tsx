import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, LogOut } from 'lucide-react';

interface SidebarProps {
  isMobileMenuOpen: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/seller/dashboard' },
  { icon: Package, label: 'Gerenciar Produtos', path: '/seller/products' }
];

export default function Sidebar({ isMobileMenuOpen }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-sm hidden lg:block">
        <nav className="h-full py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 ${
                      isActive ? 'bg-orange-50 text-orange-500 border-r-4 border-orange-500' : ''
                    }`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
            <li className="px-4 py-4 mt-auto">
              <NavLink
                to="/seller/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="h-full py-4 mt-16">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 ${
                        isActive ? 'bg-orange-50 text-orange-500 border-r-4 border-orange-500' : ''
                      }`
                    }
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="px-4 py-4 mt-auto">
                <NavLink
                  to="/seller/login"
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                >
                  <LogOut size={20} />
                  <span>Sair</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}