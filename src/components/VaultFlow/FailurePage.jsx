import React from 'react';

export default function FailureReturnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-cyan-400 font-extrabold text-2xl mb-4">Divi Vault</div>
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-4xl font-bold">✕</span>
        </div>
        <h1 className="text-3xl font-bold text-red-400 mb-4">Transaction Failed</h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto mb-8">
          Please check your wallet balance, gas fees, or try again. Make sure you're on the correct chain and your wallet is connected.
        </p>
        <a
          href="/vault/lock/promo"
          className="inline-block w-full max-w-xs px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-bold rounded-xl shadow-md transition"
        >
          Return to Promotion Page
        </a>
      </div>
    </div>
  );
}
