import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Guia Completo de Marketing Digital',
    price: 'R$ 49,90',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Produtividade sem Limites',
    price: 'R$ 39,90',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Finanças Pessoais',
    price: 'R$ 44,90',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Mindfulness para Iniciantes',
    price: 'R$ 34,90',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Livros Digitais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <p className="text-orange-500 font-bold mb-4">{product.price}</p>
                <button className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Comprar Agora</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}