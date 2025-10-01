import React from 'react';
import AuthManager from '../components/AuthManager';

// Certifique-se de instalar e configurar o Tailwind CSS (ou o seu framework de estilo preferido)
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8">Proposta Turbo</h1>
      <AuthManager />
    </div>
  );
}
