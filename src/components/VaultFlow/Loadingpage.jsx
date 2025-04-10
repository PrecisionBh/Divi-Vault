import React from 'react';

export default function PleaseWaitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-cyan-400 font-extrabold text-2xl mb-4">Divi Vault</div>
        <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-3xl font-bold text-cyan-300 mb-4">Processing Your Lock...</h1>
        <p className="text-lg text-gray-400 max-w-md mx-auto">
          Your transaction is being confirmed on the blockchain. This may take a few seconds depending on network activity. Please do not refresh or close the page.
        </p>
      </div>
    </div>
  );
}
