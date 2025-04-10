import React, { useState } from 'react';

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
        .badge-rotate {
          position: absolute;
          top: 1rem;
          right: -2.5rem;
          transform: rotate(45deg);
          background-color: rgba(6, 182, 212, 0.8);
          color: white;
          padding: 0.25rem 1rem;
          font-size: 0.65rem;
          font-weight: bold;
          border-radius: 0.5rem;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </div>
  );
}

export default function PromotionSelectionPage() {
  const [selectedPromos, setSelectedPromos] = useState([]);

  const baseCost = 0.25;
  const promoCosts = {
    boost: 0.25,
    nft: 0.5,
  };

  const togglePromo = (promo) => {
    setSelectedPromos(prev =>
      prev.includes(promo) ? prev.filter(p => p !== promo) : [...prev, promo]
    );
  };

  const totalPromoCost = selectedPromos.reduce((acc, key) => acc + promoCosts[key], 0);
  const totalCost = (baseCost + totalPromoCost).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white px-4 py-12">
      <ConnectWalletButton />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-4">Promote Your Lock (Optional)</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Enhance your lock visibility with one of our featured promotions. Your lock is always secure — but a little spotlight goes a long way.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center mb-8">
        {/* Boosted */}
        <div className="relative">
          <div
            onClick={() => togglePromo('boost')}
            className={`cursor-pointer bg-[#111827] border rounded-2xl p-6 shadow-md transition hover:shadow-cyan-500/40 ${selectedPromos.includes('boost') ? 'border-cyan-500' : 'border-gray-600'}`}
          >
            <div className="badge-rotate">🔷 Divi Recommended</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">Boosted Promo +0.25 BNB</h3>
            <p className="text-gray-300">
              Instantly gain more traction with your project by broadcasting your token directly on the Divi Dashboard for <strong>60 days</strong>. 
              Your lock will be highlighted with a premium promo graphic viewed by every dashboard visitor.
            </p>
          </div>
          {selectedPromos.includes('boost') && (
            <div className="mt-3 text-sm text-cyan-400 font-semibold">✓ Selected</div>
          )}
        </div>

        {/* NFT */}
        <div className="relative">
          <div
            onClick={() => togglePromo('nft')}
            className={`cursor-pointer bg-[#111827] border rounded-2xl p-6 shadow-md transition hover:shadow-cyan-500/40 ${selectedPromos.includes('nft') ? 'border-cyan-500' : 'border-gray-600'}`}
          >
            <div className="badge-rotate">🔷 Divi Recommended</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">NFT Promo +0.5 BNB</h3>
            <p className="text-gray-300">
              Mint a 1-of-1 official Divi Vault NFT tied to your lock. Use it as a badge of integrity across your website, socials, and promotional graphics — stamped with Divi’s verified seal of commitment. Instantly post to your groups to gain investors' trust with something they can see, not just read.
            </p>
          </div>
          {selectedPromos.includes('nft') && (
            <div className="mt-3 text-sm text-cyan-400 font-semibold">✓ Selected</div>
          )}
        </div>
      </div>

      {/* Total + CTA */}
      <div className="text-center">
        <div className="text-xl font-semibold text-cyan-300 mb-6">
          Total Estimated Cost: {totalCost} BNB
        </div>
        <a
          href="/vault/lock/confirm"
          className="inline-block w-full max-w-xs px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-bold rounded-xl shadow-md transition animate-pulse-slow"
        >
          Continue to Confirmation
        </a>
      </div>

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
