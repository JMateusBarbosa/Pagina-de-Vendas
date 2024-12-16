import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/seller/Logo';
import LoginForm from '../../components/seller/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const handleLogin = async (email: string, password: string) => {
    try {
      // Here you would typically make an API call to authenticate
      // For now, we'll simulate a login
      if (email === 'test@example.com' && password === 'password') {
        navigate('/seller/dashboard');
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (err) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo />
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Área do Vendedor
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Faça login para acessar sua conta
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSubmit={handleLogin} error={error} />
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2024 DigiBooks - Todos os direitos reservados
      </footer>
    </div>
  );
}