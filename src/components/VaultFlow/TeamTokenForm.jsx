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
      `}</style>
    </div>
  );
}

export default function TeamTokenVestingPage() {
  const [teamTokenAddress, setTeamTokenAddress] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [totalTokensInWallet] = useState(100000); // mock value
  const [lockAmount, setLockAmount] = useState('');
  const [lockDays, setLockDays] = useState('');
  const [vestingCheckpoints, setVestingCheckpoints] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  // ... handlers unchanged ...

  const baseCost = 0.25;
  const vestingCost = 0.1 * vestingCheckpoints.length;
  const teamCost = 0.1 * teamMembers.length;
  const teamVestingCost = teamMembers.reduce((sum, m) => sum + 0.1 * m.checkpoints.length, 0);
  const totalCost = (baseCost + vestingCost + teamCost + teamVestingCost).toFixed(2);

  const mainBlockValid =
    teamTokenAddress.trim() !== '' &&
    !isNaN(parseFloat(lockAmount)) && parseFloat(lockAmount) > 0 &&
    !isNaN(parseInt(lockDays)) && parseInt(lockDays) > 0;

  const checkpointsValid = vestingCheckpoints.every(cp =>
    cp.date && !isNaN(parseFloat(cp.amount)) && parseFloat(cp.amount) > 0
  );

  const teamMembersValid = teamMembers.every(m => {
    const checkpointsOk = m.checkpoints.every(cp =>
      cp.date && !isNaN(parseFloat(cp.amount)) && parseFloat(cp.amount) > 0
    );
    return m.wallet.trim() !== '' &&
      !isNaN(parseFloat(m.amount)) && parseFloat(m.amount) > 0 &&
      checkpointsOk;
  });

  const totalTeamAmount = teamMembers.reduce((sum, m) => sum + parseFloat(m.amount || 0), 0);
  const lockAmountValid = parseFloat(lockAmount) === totalTeamAmount || teamMembers.length === 0;

  const isFormValid = mainBlockValid && checkpointsValid && teamMembersValid && lockAmountValid;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white px-4 py-12">
      <ConnectWalletButton />

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-6">Team Token Vesting</h1>
        <p className="text-lg text-gray-300 mb-12">Lock your tokens with optional vesting and team allocations.</p>

        <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-8 space-y-6 text-left">
          {/* ... existing fields ... */}

          {/* New: Social Link */}
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Optional Social Link</label>
            <input
              type="text"
              value={socialLink}
              onChange={e => setSocialLink(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
              placeholder="https://twitter.com/yourproject"
            />
          </div>

          {/* New: Website URL */}
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Optional Website</label>
            <input
              type="text"
              value={websiteUrl}
              onChange={e => setWebsiteUrl(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
              placeholder="https://yourproject.com"
            />
          </div>

          <div className="text-lg text-cyan-200 font-bold mt-6">Estimated Cost: {totalCost} BNB</div>

          {!lockAmountValid && (
            <p className="text-red-400 text-sm font-semibold">
              Error: Team token allocations must equal the total locked amount.
            </p>
          )}

          <button
            disabled={!isFormValid}
            className={`mt-4 w-full px-6 py-3 font-bold rounded-xl shadow-lg transition animate-pulse-slow ${
              isFormValid ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Approve & Lock Team Tokens
          </button>
        </div>
      </div>
    </div>
  );
}
