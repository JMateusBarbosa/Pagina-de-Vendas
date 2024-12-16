import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error?: string;
}

export default function LoginForm({ onSubmit, error }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <a href="/seller/forgot-password" className="text-sm text-orange-500 hover:text-orange-600">
          Esqueci minha senha
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}