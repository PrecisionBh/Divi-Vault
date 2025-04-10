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
  const chains = [
    'Ethereum', 'BNB Chain', 'Polygon', 'Arbitrum', 'Optimism',
    'Avalanche', 'Fantom', 'Base', 'zkSync', 'Linea',
    'Scroll', 'Metis', 'Cronos', 'Mantle', 'Celo'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white px-4 py-12">
      <ConnectWalletButton />

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-6">Select Your Blockchain</h1>
        <p className="text-lg text-gray-300 mb-12">Choose the network you want to lock tokens on:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {chains.map((chain, idx) => (
            <div key={idx} className="w-36 h-36 bg-[#111827] border border-cyan-500 rounded-2xl flex items-center justify-center text-cyan-300 font-semibold shadow-lg hover:shadow-cyan-500/30 transition text-center text-sm px-2">
              {chain}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
