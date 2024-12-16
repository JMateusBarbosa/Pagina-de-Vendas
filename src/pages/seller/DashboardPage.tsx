import React from 'react';
import { ShoppingBag, Package, DollarSign } from 'lucide-react';
import StatsCard from '../../components/seller/dashboard/StatsCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Bem-vindo de volta! Aqui está um resumo da sua loja.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          icon={ShoppingBag}
          title="Vendas Totais"
          value="R$ 12.450,00"
          description="32 vendas este mês"
        />
        <StatsCard
          icon={Package}
          title="Produtos Ativos"
          value="15"
          description="2 produtos adicionados recentemente"
        />
        <StatsCard
          icon={DollarSign}
          title="Última Venda"
          value="R$ 149,90"
          description="Há 2 horas atrás"
        />
      </div>
    </div>
  );
}