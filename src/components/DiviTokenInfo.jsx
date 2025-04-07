import React from 'react';

export default function DiviTokenInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/starfield.gif')] bg-cover bg-center opacity-30 animate-pulse z-0" />

      <div className="relative z-10 px-6 pt-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 drop-shadow-xl mb-4 animate-glow">
          DIVI Token Info
        </h1>
        <p className="text-lg text-cyan-100 mb-10 max-w-2xl mx-auto">
          Estimated Launch Date: Summer 2025 — Transparent, fair, and designed for long-term holders. Here’s everything you need to know about the DIVI token.
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">Total Supply</h3>
            <p className="text-sm text-gray-300">1,000,000 DIVI</p>
          </div>
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">Base Tax (Buy/Sell)</h3>
            <p className="text-sm text-gray-300">6% — 3% Marketing/Dev, 2% Liquidity, 1% Reflections</p>
          </div>
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">High Sell Tax</h3>
            <p className="text-sm text-gray-300">15% — Triggers on sells ≥0.25% of total supply<br/> 4% Marketing, 3% Liquidity, 8% Reflections</p>
          </div>
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">Max Wallet / Tx</h3>
            <p className="text-sm text-gray-300">Max Wallet: 2.5% of supply<br/>Max Tx: 0.5% of supply</p>
          </div>
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">Reflections</h3>
            <p className="text-sm text-gray-300">Earn DIVI passively from every transaction. No need to stake.</p>
          </div>
          <div className="bg-zinc-900/80 border border-cyan-600 rounded-xl p-6 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-cyan-200 mb-2">Bot Protection</h3>
            <p className="text-sm text-gray-300">Auto-blacklisting + cooldowns + trading lock pre-launch</p>
          </div>
        </div>

        <div className="mt-12 mb-4 text-center">
          <p className="text-sm text-cyan-300 font-semibold">
            💧 100% Minted Supply Paired with Liquidity · 🔒 Liquidity Locked · 🔥 No Mint Function · 🛑 No Backdoors<br />
            ✅ 0 Team Tokens · ❌ No Presale · ❌ No Whitelist · ❌ No VCs
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-10 max-w-xl mx-auto">
          Note: Taxes are adjustable (combined buy/sell max 10%). High sell tax is exempt from this cap. Trading is disabled until launch. Contract includes force swap, cooldown, and reflection tracking features.
        </p>

        <div className="mt-12">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
