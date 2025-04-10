import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const DIVI_LP_ADDRESS = "0x0D93e888279349c86a025c1DbbAf7D3c19aa5997";
const DIVI_TOKEN_ADDRESS = "0xB5623308Cc34691233B7FfB1940da5f524AB36CB";
const LP_ABI = [
  "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() view returns (address)",
  "function token1() view returns (address)"
];
const DIVI_ABI = [
  "function totalReflections() view returns (uint256)",
  "function totalSupply() view returns (uint256)"
];

export default function DiviDashboard() {
  const [bnbAmount, setBnbAmount] = useState("");
  const [bnbUsd, setBnbUsd] = useState(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const [price, setPrice] = useState(null);
  const [liquidity, setLiquidity] = useState(null);
  const [reflections, setReflections] = useState(null);

  useEffect(() => {
    const fetchBnbPrice = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
        const data = await res.json();
        setBnbUsd(data?.binancecoin?.usd || null);
      } catch (err) {
        console.error("Error fetching BNB price", err);
      }
    };
    fetchBnbPrice();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
        const lpContract = new ethers.Contract(DIVI_LP_ADDRESS, LP_ABI, provider);
        const tokenContract = new ethers.Contract(DIVI_TOKEN_ADDRESS, DIVI_ABI, provider);

        const reserves = await lpContract.getReserves();
        const token0 = await lpContract.token0();
        const token1 = await lpContract.token1();

        if (!reserves || !token0 || !token1) throw new Error("Incomplete LP contract data");

        const [res0, res1] = reserves;
        const isDiviToken0 = token0.toLowerCase() === DIVI_TOKEN_ADDRESS.toLowerCase();
        const diviReserve = isDiviToken0 ? res0 : res1;
        const bnbReserve = isDiviToken0 ? res1 : res0;

        if (diviReserve == 0) throw new Error("DIVI reserve is zero, cannot calculate price");

        const pricePerToken = bnbReserve / diviReserve;
        const totalLiquidity = (bnbReserve / 1e18) * 2;

        const totalReflections = await tokenContract.totalReflections();

        setPrice(pricePerToken * bnbUsd);
        setLiquidity(totalLiquidity * bnbUsd);
        setReflections((Number(totalReflections) / 1e18) * bnbUsd);
      } catch (err) {
        console.error("Error fetching LP data:", err);
      }
    };
    if (bnbUsd) {
      fetchData();
      const interval = setInterval(fetchData, 8000);
      return () => clearInterval(interval);
    }
  }, [bnbUsd]);

  const handleBuyNow = () => {
    if (!walletConnected) return;
    setIsConfirming(true);
  };

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        setWalletConnected(true);
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    }
  };

  const handleConfirmSwap = () => {
    setIsConfirming(false);
  };

  const parsedBNB = parseFloat(bnbAmount || "0");
  const fee = !isNaN(parsedBNB) && parsedBNB > 0 ? parsedBNB * 0.005 : 0;
  const toSwap = parsedBNB - fee;
  const usd = bnbUsd && !isNaN(parsedBNB) && parsedBNB > 0 ? (parsedBNB * bnbUsd).toFixed(2) : null;

  return (
    <div className="min-h-screen bg-[#070B17] text-[#00E5FF] px-4 md:px-8 py-8 flex flex-col relative">
      <div className="w-full flex justify-between items-start mb-4">
        <motion.div
          className="bg-[#0A1228] border-4 border-[#00E5FF] rounded-full px-6 py-4 shadow-[0_0_20px_#00E5FF] text-center font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <p className="text-lg">Total Reflections: ${reflections?.toFixed(2) || "0.00"}</p>
          <p className="text-sm text-[#C2E9F9]">0 DIVI</p>
        </motion.div>

        <button
          onClick={handleConnectWallet}
          className="bg-[#00E5FF] text-black font-bold px-6 py-2 rounded-full shadow-[0_0_12px_#00E5FF] hover:scale-105 transition"
        >
          {walletConnected ? "Connected" : "Connect Wallet"}
        </button>
      </div>

      <div className="text-center mt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#00E5FF]">Divi Dashboard</h1>
        <p className="text-[#B0C4DE] mt-2 text-lg md:text-xl">Central Hub of the Divi Ecosystem</p>
      </div>

      <div className="mt-6 w-full text-center flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-10 text-lg md:text-xl font-semibold text-[#C2E9F9]">
          <p>Price: ${price?.toFixed(6) || "0.0000"}</p>
          <p>Liquidity: ${liquidity?.toFixed(0) || "0"}</p>
          <p>Holders: 0</p>
        </div>
        <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-pulse"></div>
      </div>

      <div className="mt-10 w-full flex justify-between items-start gap-6">
        <div className="w-48 flex flex-col gap-6">
          {["$Divi", "Divi Vault", "Staking", "Contract Creator", "Divi Audits"].map((label, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <button className="w-full bg-[#00E5FF] text-black px-4 py-2 rounded-xl font-bold shadow-[0_0_12px_#00E5FF] hover:scale-105 transition">
                {label}
              </button>
              <p className="text-sm text-[#C2E9F9] mt-1 text-center">
                {label === "$Divi" ? "Token Info" :
                label === "Divi Vault" ? "LP and Token Locker" :
                label === "Staking" ? <Link to="/staking-coming-soon">Coming Soon</Link> :
                label === "Contract Creator" ? <Link to="/contract-creator-coming-soon">Coming Soon</Link> :
                label === "Divi Audits" ? <Link to="/contract-audits-coming-soon">Coming Soon</Link> :
                "Coming Soon"}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center flex-grow max-w-2xl mx-auto">
          <div className="bg-[#0A1228] border-4 border-[#00E5FF] rounded-2xl p-8 w-full shadow-[0_0_20px_#00E5FF]">
            <h2 className="text-2xl font-bold text-center mb-6">Swap Divi</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col bg-[#10192f] rounded-xl px-4 py-4">
                <label className="text-sm text-[#C2E9F9] mb-1 font-semibold">You Pay (BNB)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={bnbAmount}
                  onChange={(e) => setBnbAmount(e.target.value)}
                  className="w-full px-4 py-3 text-black rounded-xl"
                />
              </div>
              <div className="flex justify-center items-center -mt-3 mb-1 z-10">
                <div className="bg-[#0A1228] border-2 border-[#00E5FF] rounded-full p-1">
                  <span className="text-[#00E5FF] text-xl">↓</span>
                </div>
              </div>
              <div className="flex flex-col bg-[#10192f] rounded-xl px-4 py-4">
                <label className="text-sm text-[#C2E9F9] mb-1 font-semibold">You Receive (DIVI)</label>
                <input
                  type="text"
                  placeholder="Estimated output"
                  value={parsedBNB && price ? ((toSwap) / price).toFixed(2) : ""}
                  disabled
                  className="w-full px-4 py-3 text-black rounded-xl bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-center text-[#C2E9F9] space-y-1">
              <p>0.5% Fee: <span className="font-bold">{fee > 0 ? fee.toFixed(4) : "--"} BNB</span></p>
              {usd && <p>Estimated USD: <span className="font-bold">${usd}</span></p>}
            </div>
            <button
              onClick={walletConnected ? handleBuyNow : handleConnectWallet}
              className="mt-4 w-full bg-[#00E5FF] text-black font-bold px-6 py-3 rounded-xl shadow-[0_0_10px_#00E5FF] hover:scale-105 transition"
            >
              {walletConnected ? "Buy Now" : "Connect Wallet"}
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center">Disclaimer: Not financial advice. DYOR before swapping.</p>
          </div>
        </div>

        <div className="w-64">
          <BoostedCard />
        </div>
      </div>

      {isConfirming && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0A1228] border-4 border-[#00E5FF] rounded-2xl p-8 w-full max-w-md shadow-[0_0_30px_#00E5FF] text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Your Swap</h3>
            <p className="mb-2">Amount Entered: {bnbAmount} BNB</p>
            <p className="mb-2">Platform Fee: {fee.toFixed(4)} BNB</p>
            <p className="mb-2">Swapping: {toSwap.toFixed(4)} BNB → DIVI</p>
            {usd && <p className="mb-4 text-[#C2E9F9]">Approx. Value: ${usd}</p>}
            <div className="flex gap-4 justify-center">
              <button onClick={handleConfirmSwap} className="bg-[#00E5FF] text-black font-bold px-6 py-2 rounded-full">Confirm</button>
              <button onClick={() => setIsConfirming(false)} className="border border-[#00E5FF] text-[#00E5FF] px-6 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
