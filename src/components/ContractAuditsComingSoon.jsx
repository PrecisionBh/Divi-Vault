import React from 'react';

export default function ContractAuditsComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-300 mb-6 animate-glow">Coming Soon</h1>
        <p className="text-lg md:text-xl text-cyan-100 mb-8">
          🚀 Contract Audit app is coming soon! Stay tuned for more updates.
        </p>
        <p className="text-base text-cyan-100 max-w-xl mx-auto mb-12">
          The Audit feature is under development. Please check back later for more details.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
