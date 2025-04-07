import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const DIVI_ADDRESS = "0xc363c39baF1AE6f6F490B69D3622D8c0Aa74b8fF";
const PAIR_ADDRESS = "0xc5fF7bC375C1BD6668E69a2d5d2850d0e9bc3bf7";
const BNB_PRICE_API = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT";

const Starfield = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 6,
      duration: Math.random() * 2 + 2,
      color: ["#ffffff", "#00ffff", "#66ccff"][Math.floor(Math.random() * 3)],
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes glow { 0%, 100% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; } 50% { text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff; } }
        @keyframes energy-move-header { 0%, 100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-energy-header { animation: energy-move-header 8s ease-in-out infinite; }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: 0.2,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [price, setPrice] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bnbAmount, setBnbAmount] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      try {
        setIsProcessing(true);
        console.log("Requesting account access...");
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        setWalletAddress(account);
        console.log("Connected account:", account);
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      } finally {
        setIsProcessing(false);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  const navigate = (path) => {
    window.location.href = path;
  };

  const estimatedDivi = price && bnbAmount ? (parseFloat(bnbAmount) / price).toFixed(2) : "0";
  const usdValue = bnbAmount && price ? (parseFloat(bnbAmount) * price).toFixed(2) : "0.00";
  const feeAmount = bnbAmount ? (parseFloat(bnbAmount) * 0.005).toFixed(6) : "0.000000";
  const netBnb = bnbAmount ? (parseFloat(bnbAmount) - parseFloat(feeAmount)).toFixed(6) : "0.000000";

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-white relative overflow-hidden pt-20 bg-black">
      <Starfield />

      {/* Reflections Box */}
      <div className="absolute top-6 left-6 z-20 text-left">
        <p className="text-sm text-cyan-300 mb-1">Total Reflections Sent</p>
        <div className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-semibold">
          $12,345.67
        </div>
      </div>

      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
        >
          Back to Home
        </button>
        <button
          onClick={connectWallet}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
        >
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
        </button>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10 text-cyan-300 animate-glow">Divi Dashboard</h1>

      <div className="text-sm text-cyan-200 z-10 mb-4 flex flex-wrap justify-center gap-6 animate-glow">
        <div>Price: ${price ? price.toFixed(4) : "0.00"}</div>
        <div>Liquidity: Data coming soon</div>
        <div>Holders: 1,234</div>
      </div>

      <div className="relative w-full h-1 bg-cyan-800 overflow-hidden z-10 mb-6">
        <div className="absolute h-1 w-full animate-energy-header">
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-300 via-cyan-100 to-transparent rounded-full shadow-xl" />
        </div>
      </div>

      <div className="mt-6 z-10">
        <div className="bg-zinc-900 rounded-2xl shadow-2xl p-6 w-80 text-center border border-cyan-600">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Buy DIVI</h2>
          <input
            type="number"
            placeholder="Amount in BNB"
            value={bnbAmount}
            onChange={(e) => setBnbAmount(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black text-white border border-cyan-500 mb-4"
          />
          <p className="text-cyan-200 text-sm mb-2">≈ {estimatedDivi} DIVI</p>
          <p className="text-cyan-400 text-xs mb-4">Spending ≈ ${usdValue} USD</p>
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-cyan-600 hover:bg-cyan-700 w-full py-2 rounded text-white font-bold transition"
            disabled={isProcessing || !bnbAmount}
          >
            {isProcessing ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-zinc-800 border border-cyan-500 rounded-2xl p-6 w-96 shadow-xl text-white">
            <h2 className="text-xl text-cyan-300 font-bold mb-4">Confirm Purchase</h2>
            <p className="text-sm mb-2">BNB Entered: {bnbAmount}</p>
            <p className="text-sm mb-2">Fee (0.5%): {feeAmount} BNB</p>
            <p className="text-sm mb-2">Net Sent: {netBnb} BNB</p>
            <p className="text-sm mb-4">Est. Tokens: {estimatedDivi} DIVI</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-700 hover:bg-gray-600 flex-1 py-2 rounded"
              >Cancel</button>
              <button
                className="bg-cyan-600 hover:bg-cyan-700 flex-1 py-2 rounded"
              >Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
