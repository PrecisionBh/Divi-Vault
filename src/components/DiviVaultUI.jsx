import React from 'react';

export default function VaultComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/starfield.gif')] bg-cover bg-center opacity-30 animate-pulse z-0" />

      <div className="absolute top-[57%] left-0 w-full h-1 bg-cyan-500 animate-pulse z-0" />

      <div className="relative z-10 px-6 pt-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-300 drop-shadow-xl mb-6 animate-glow">
          Divi Vault
        </h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">
          🔒 Secure Liquidity. 📅 Launching Summer 2025
        </p>
        <p className="text-base text-cyan-100 max-w-xl mx-auto mb-12">
          The ultimate multi-chain liquidity locker is almost here. Designed for speed, simplicity, and trust — across BNB, ETH, Arbitrum, and more.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          ← Back to Home
        </a>
      </div>

      <footer className="mt-32 mb-8 text-center text-sm text-gray-500 z-10 relative">
        Divi Vault © 2025 — All rights reserved
      </footer>
    </div>
  );
}
