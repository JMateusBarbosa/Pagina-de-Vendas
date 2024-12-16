import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Empreendedora',
    text: 'Os livros digitais transformaram minha forma de aprender. Conteúdo excelente!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Carlos Santos',
    role: 'Estudante',
    text: 'Material de alta qualidade e preço justo. Recomendo fortemente!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}