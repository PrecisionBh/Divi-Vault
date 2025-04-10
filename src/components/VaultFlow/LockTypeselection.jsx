import React from 'react';

function ConnectWalletButton() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm rounded-xl shadow-lg transition animate-pulse-slow"
        onClick={() => alert('Connect wallet logic goes here')}
      >
        Connect Wallet
      </button>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(6, 182, 212, 0.4); }
          50% { opacity: 0.9; box-shadow: 0 0 20px rgba(6, 182, 212, 0.8); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function VaultLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white px-4 py-12">
      <ConnectWalletButton />

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-6">What Type of Token Are You Locking?</h1>
        <p className="text-lg text-gray-300 mb-12">Choose the lock type that fits your needs:</p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <a href="/vault/liquidity" className="w-full max-w-xs px-8 py-6 bg-[#111827] border border-cyan-500 rounded-2xl text-cyan-300 font-bold text-lg shadow-lg hover:shadow-cyan-500/30 transition text-center">
            Liquidity Pair
          </a>
          <a href="/vault/team" className="w-full max-w-xs px-8 py-6 bg-[#111827] border border-cyan-500 rounded-2xl text-cyan-300 font-bold text-lg shadow-lg hover:shadow-cyan-500/30 transition text-center">
            Team Tokens
          </a>
        </div>
      </div>
    </div>
  );
}
