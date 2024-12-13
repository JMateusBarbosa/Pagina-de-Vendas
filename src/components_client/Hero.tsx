import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-[#ffcba8] to-[#f86392]">


      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transforme sua vida com nossos livros digitais
            </h1>
            <p className="text-xl text-gray-600">
              Conheça nossa coleção de livros prontos para mudar sua maneira de aprender e crescer.
            </p>
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              <span>Ver Produtos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
              alt="Books and Learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}