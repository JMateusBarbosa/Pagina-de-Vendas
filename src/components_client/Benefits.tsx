import React from 'react';
import { Download, PiggyBank, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Download,
    title: 'Download instantâneo',
    description: 'Acesse seus livros em segundos após o pagamento'
  },
  {
    icon: PiggyBank,
    title: 'Preço acessível',
    description: 'Livros de alta qualidade com preços justos'
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Pagamento rápido e protegido'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <benefit.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}