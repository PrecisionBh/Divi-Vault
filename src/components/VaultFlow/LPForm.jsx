import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = 'YOUR_LOCKER_CONTRACT_ADDRESS';
const CONTRACT_ABI = [/* your contract ABI here */];

function ConnectWalletButton({ connectWallet }) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm rounded-xl shadow-lg transition animate-pulse-slow"
        onClick={connectWallet}
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

export default function LiquidityLockPage() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [lpAddress, setLpAddress] = useState('');
  const [showLPBalance, setShowLPBalance] = useState(false);
  const [lpBalance, setLpBalance] = useState(10000); // Mock value
  const [percentageToLock, setPercentageToLock] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [lockName, setLockName] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [multiSigAddresses, setMultiSigAddresses] = useState(['']);

  useEffect(() => {
    setMultiSigAddresses(['Wallet Address (You)']);
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
      setMultiSigAddresses([accounts[0]]);
    } else {
      alert('Please install MetaMask to connect.');
    }
  };

  const handleAddAddress = () => {
    setMultiSigAddresses([...multiSigAddresses, '']);
  };

  const handleRemoveAddress = (index) => {
    if (index === 0) return;
    const updated = [...multiSigAddresses];
    updated.splice(index, 1);
    setMultiSigAddresses(updated);
  };

  const handleAddressChange = (index, value) => {
    const updated = [...multiSigAddresses];
    updated[index] = value;
    setMultiSigAddresses(updated);
  };

  const handlePercentageChange = (value) => {
    const percent = parseFloat(value);
    setPercentageToLock(value);
    if (!isNaN(percent) && percent >= 1 && percent <= 100) {
      const amount = ((lpBalance * percent) / 100).toFixed(2);
      setCalculatedAmount(amount);
    } else {
      setCalculatedAmount('');
    }
  };

  const baseCost = 0.25;
  const multisigCost = 0.1 * (multiSigAddresses.length - 1);
  const totalCost = (baseCost + multisigCost).toFixed(2);

  const isValid = () => {
    return (
      lpAddress.startsWith('0x') &&
      !isNaN(parseFloat(percentageToLock)) &&
      parseFloat(percentageToLock) >= 1 &&
      parseFloat(percentageToLock) <= 100 &&
      unlockDate &&
      calculatedAmount > 0
    );
  };

  const handleLock = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const unlockTimestamp = Math.floor(new Date(unlockDate).getTime() / 1000);
      const amountInWei = ethers.utils.parseUnits(calculatedAmount, 18);
      const costInWei = ethers.utils.parseEther(totalCost);

      const tx = await contract.lockLiquidity(
        lpAddress,
        amountInWei,
        unlockTimestamp,
        lockName,
        multiSigAddresses,
        socialLink,
        websiteLink,
        { value: costInWei }
      );

      await tx.wait();
      alert('Liquidity successfully locked!');
    } catch (error) {
      console.error(error);
      alert('Transaction failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white px-4 py-12">
      <ConnectWalletButton connectWallet={connectWallet} />

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-6">Lock Liquidity Pair</h1>
        <p className="text-lg text-gray-300 mb-12">Secure your LP tokens by locking them with a defined unlock date.</p>

        <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">LP Token Address</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={lpAddress}
                onChange={e => setLpAddress(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
                placeholder="0x..."
              />
              <button
                onClick={() => setShowLPBalance(!showLPBalance)}
                className="text-cyan-400 hover:text-cyan-200 text-xl"
              >
                ➤
              </button>
            </div>
            {showLPBalance && (
              <p className="text-sm text-gray-400 mt-2">Available LP Tokens: {lpBalance}</p>
            )}
          </div>

          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Amount to Lock (in %)</label>
            <input
              type="number"
              value={percentageToLock}
              onChange={e => handlePercentageChange(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
              placeholder="Enter percentage (1-100)"
              min="1"
              max="100"
            />
            {calculatedAmount && (
              <p className="text-sm text-cyan-200 mt-2">You are locking: {calculatedAmount} LP Tokens</p>
            )}
          </div>

          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Unlock Date</label>
            <input
              type="date"
              value={unlockDate}
              onChange={e => setUnlockDate(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Optional Lock Name</label>
            <input
              type="text"
              value={lockName}
              onChange={e => setLockName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
              placeholder="MyProject-LP"
            />
          </div>

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

          <div>
            <label className="block text-cyan-300 mb-1 font-semibold">Optional Website URL</label>
            <input
              type="text"
              value={websiteLink}
              onChange={e => setWebsiteLink(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
              placeholder="https://yourproject.com"
            />
          </div>

          <div>
            <label className="block text-cyan-300 mb-1 font-semibold mb-2">Multi-Sig Wallets</label>
            {multiSigAddresses.map((addr, index) => (
              <div key={index} className="relative mb-2">
                <input
                  type="text"
                  value={addr}
                  onChange={e => handleAddressChange(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-black text-white border border-cyan-500"
                  placeholder={index === 0 ? 'Your connected wallet (lock creator)' : '0x...'}
                  readOnly={index === 0}
                />
                {index !== 0 && (
                  <button
                    onClick={() => handleRemoveAddress(index)}
                    className="absolute top-2 right-2 text-sm text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={handleAddAddress}
              className="mt-2 text-sm text-cyan-400 hover:underline"
            >
              + Add Another Address
            </button>
          </div>

          <div className="text-lg text-cyan-200 font-bold mt-6">
            Estimated Cost: {totalCost} BNB
          </div>

          <button
            disabled={!isValid()}
            onClick={handleLock}
            className={`mt-6 w-full px-6 py-3 rounded-xl font-bold shadow-lg transition animate-pulse-slow ${
              isValid() ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-gray-600 text-gray-300 cursor-not-allowed'
            }`}
          >
            Approve & Lock Liquidity
          </button>
        </div>
      </div>
    </div>
  );
}
