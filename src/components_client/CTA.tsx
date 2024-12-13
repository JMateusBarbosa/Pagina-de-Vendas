import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-orange-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para começar sua jornada?
        </h2>
        <p className="text-white text-xl mb-8">
          Baixe agora seu livro favorito!
        </p>
        <button className="inline-flex items-center space-x-2 bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
          <span className="font-semibold">Comprar Agora</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}