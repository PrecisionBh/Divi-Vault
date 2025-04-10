import React from 'react';
import { useRouter } from 'next/router';

export default function SuccessConfirmationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-cyan-400 font-extrabold text-2xl mb-4">Divi Vault</div>
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-4xl font-bold">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-4">Lock Confirmed</h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto mb-8">
          Your tokens have been successfully locked! Thank you for securing your project through Divi Vault.
        </p>
        <button
          onClick={() => router.push('/')}
          className="inline-block w-full max-w-xs px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-bold rounded-xl shadow-md transition"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
