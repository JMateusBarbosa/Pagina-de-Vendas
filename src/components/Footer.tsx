import React from 'react';
import { BookOpen, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">DigiBooks</span>
            </div>
            <p className="text-gray-400">
              Transformando vidas através do conhecimento digital.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Produtos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
              <li><Link to="/seller/login" className="text-gray-400 hover:text-white">Acesso do Vendedor</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contato@digibooks.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DigiBooks. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}