import React, { useState } from 'react';

export default function LandingPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/starfield.gif')] bg-cover bg-center opacity-30 animate-pulse z-0" />

      <style>{`
        .glow-box {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), 0 0 5px rgba(0, 255, 255, 0.3) inset;
          border: 1px solid rgba(0, 255, 255, 0.5);
        }
        .transition-height {
          transition: max-height 0.6s ease, opacity 0.6s ease;
        }
      `}</style>

      <div className="relative z-10 px-6 pt-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-300 drop-shadow-xl mb-6 animate-glow">
          Welcome to Divi
        </h1>
        <p className="text-lg md:text-2xl text-cyan-100 mb-10 max-w-2xl mx-auto animate-glow">
          The Safer Side of DeFi
        </p>
      </div>

      {/* Collapsible Sections */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-12 space-y-6">
        {[
          {
            id: 'divi',
            title: 'What is Divi?',
            content: (
              <p className="text-cyan-100 text-md md:text-lg max-w-3xl mx-auto">
                Divi is a community-driven token and DeFi toolkit built for transparency, simplicity, and security. With a custom dashboard, token locker, and real-time reflections tracking, Divi empowers holders and projects to thrive in a safe and visible ecosystem.
              </p>
            )
          },
          {
            id: 'vault',
            title: 'Divi Vault',
            content: (
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Liquidity Vault</h3>
                <p className="text-cyan-100 mb-4">
                  For serious developers who want to earn investor trust. Lock liquidity and vest team allocations across multiple chains — and prove you’re building something real.
                </p>
                <h4 className="text-cyan-300 font-semibold mb-1">Use Case:</h4>
                <ul className="list-disc list-inside text-cyan-100 mb-4">
                  <li>Lock LP tokens and team tokens on <strong>BNB, ETH, Arbitrum, and more</strong></li>
                  <li>Add unlock dates or vesting schedules</li>
                  <li>Public vault records to back your launch with transparency</li>
                </ul>
                <h4 className="text-cyan-300 font-semibold mb-1">Benefits:</h4>
                <ul className="list-disc list-inside text-cyan-100 mb-6">
                  <li>Shows investors you're committed and anti-rug</li>
                  <li>Helps qualify for launchpads, listings, and trusted community spaces</li>
                  <li><strong>Using Divi Vault is a growth tool</strong> — transparency becomes your marketing advantage</li>
                </ul>
                <div className="text-center">
                  <a
                    href="/vault"
                    className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
                  >
                    🔒 Go to Vault Now
                  </a>
                </div>
              </div>
            )
          },
          {
            id: 'dashboard',
            title: 'Divi Dashboard',
            content: (
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Use Cases (Starting Out)</h3>
                <ul className="list-disc list-inside text-cyan-100 mb-4">
                  <li>Track live Divi token info: price, market cap, liquidity, holders</li>
                  <li>Buy DIVI tokens directly through an integrated dashboard swap</li>
                  <li>View total reflections sent globally</li>
                  <li>User-friendly interface designed for all experience levels</li>
                </ul>
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2 mt-6">Future Capabilities</h3>
                <ul className="list-disc list-inside text-cyan-100 mb-6">
                  <li>Swap multiple tokens across multiple chains</li>
                  <li>Track live token charts and performance</li>
                  <li>Search and explore tokens from the Divi ecosystem</li>
                </ul>
                <div className="text-center">
                  <a
                    href="/dashboard"
                    className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
                  >
                    📊 Go to Dashboard
                  </a>
                </div>
              </div>
            )
          },
          {
            id: 'token',
            title: 'Divi Token',
            content: (
              <div className="text-left">
                <p className="text-cyan-100 mb-6 text-md md:text-lg">
                  Divi was created out of frustration — a response to the endless wave of malicious tokens that steal trust and money from everyday investors. We’re here to change that.
                  <br /><br />
                  The Divi Token is the heart of a transparent ecosystem. It's not just a token — it’s a message: <strong>you deserve better</strong>.
                </p>
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Use Case</h3>
                <ul className="list-disc list-inside text-cyan-100 mb-6">
                  <li>Pay gas fees for locker and dashboard features</li>
                  <li>Earn <strong>reflections</strong> from every transaction — no staking required</li>
                  <li>Unlock exclusive features within the Divi platform</li>
                </ul>
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Token Philosophy</h3>
                <ul className="list-disc list-inside text-cyan-100 mb-6">
                  <li><strong>1,000,000 total supply</strong> — no presale, no team tokens, no VC allocations</li>
                </ul>
                <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Why It Matters</h3>
                <ul className="list-disc list-inside text-cyan-100 mb-10">
                  <li>Built for holders, not insiders</li>
                  <li>Real utility from day one</li>
                  <li>Every feature we build runs on the principles Divi was founded on: <strong>integrity, transparency, and safety</strong></li>
                </ul>
                <div className="text-center">
                  <a
                    href="/token"
                    className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
                  >
                    📘 Learn More
                  </a>
                </div>
              </div>
            )
          }
        ].map(({ id, title, content }) => (
          <div key={id} className="glow-box rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleSection(id)}
              className="w-full text-left px-6 py-4 text-xl md:text-2xl font-bold text-cyan-300 flex justify-between items-center hover:text-cyan-200 transition"
            >
              {title}
              <span className="text-cyan-400 text-2xl">{openSection === id ? '▾' : '▸'}</span>
            </button>
            <div
              className={`px-6 pb-6 transition-all duration-500 ease-in-out ${openSection === id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              {content}
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-32 mb-8 text-center text-sm text-gray-500 z-10 relative">
        Divi Vault © 2025 — All rights reserved
      </footer>
    </div>
  );
}
