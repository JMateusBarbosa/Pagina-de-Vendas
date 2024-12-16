import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
}

export default function StatsCard({ icon: Icon, title, value, description }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-orange-100 rounded-lg">
          <Icon size={24} className="text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}