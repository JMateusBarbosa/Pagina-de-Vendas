import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  active: boolean;
}

const initialProducts: Product[] = [
  {
    id: 1,
    title: 'Guia Completo de Marketing Digital',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    active: true
  },
  {
    id: 2,
    title: 'Produtividade sem Limites',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80',
    active: true
  }
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gerenciar Produtos</h1>
          <p className="text-gray-500">Gerencie seus produtos digitais aqui.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          <Plus size={20} />
          <span>Adicionar Produto</span>
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-lg object-cover"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    R$ {product.price.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.active ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {}}
                    className="text-orange-500 hover:text-orange-600 mr-3"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {}}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}