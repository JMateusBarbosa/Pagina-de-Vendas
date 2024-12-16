import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <BookOpen className="h-10 w-10 text-orange-500" />
      <span className="text-2xl font-bold">DigiBooks</span>
    </div>
  );
}