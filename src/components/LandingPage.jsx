import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070B17] text-[#00E5FF] px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center relative overflow-hidden space-y-20">
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-[#00E5FF] mb-4">Divi</h1>
        <h2 className="text-lg md:text-xl text-[#B0C4DE] italic mb-4">The safer side of DeFi</h2>
        <p className="text-base md:text-lg text-[#C2E9F9] max-w-3xl mx-auto mb-6">
          Welcome to Divi — a next-gen ecosystem built on transparency, security, and simplicity.
          Whether you're here to explore, build, or buy, you're not alone. You’re part of the <span className="text-[#00E5FF] font-semibold">Divi Army</span> — a movement focused on doing DeFi right.
        </p>
        <motion.a
          href="https://www.divivault.io/dashboard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#00E5FF] text-black text-sm md:text-base font-bold py-2 px-6 rounded-full shadow-[0_0_10px_#00E5FF] transition-all duration-300"
        >
          Enter Ecosystem
        </motion.a>
      </div>

      <div className="relative w-full max-w-5xl px-6 py-10 rounded-3xl bg-gradient-to-br from-[#0A1228] via-[#111c3a] to-[#0A1228] border-4 border-[#00E5FF] shadow-[inset_0_0_40px_rgba(0,229,255,0.3),_0_0_25px_#00E5FF] backdrop-blur-md overflow-hidden text-center">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        >
          <div className="w-full h-full bg-[radial-gradient(circle,_rgba(0,229,255,0.1)_0%,_transparent_70%)]"></div>
        </motion.div>

        <div className="relative z-10 flex flex-col gap-y-10 items-center">
          <div className="text-center max-w-2xl">
            <h3 className="text-[#00E5FF] font-semibold text-xl md:text-2xl mb-2 uppercase tracking-wide">Divi Dashboard</h3>
            <p className="text-base text-[#C2E9F9]">
              The central hub for the entire Divi ecosystem. Swap DIVI instantly, navigate through utilities, and track your reflections in real time.
            </p>
          </div>

          <div className="text-center max-w-md">
            <h3 className="text-[#00E5FF] font-semibold text-xl md:text-2xl mb-2 uppercase tracking-wide">Divi Vault</h3>
            <p className="text-base text-[#C2E9F9]">Lock liquidity and tokens with NFT proof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            <div className="text-center">
              <h3 className="text-[#00E5FF] font-semibold text-xl md:text-2xl mb-2 uppercase tracking-wide">Reflections</h3>
              <p className="text-base text-[#C2E9F9]">Earn passively just by holding.</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#00E5FF] font-semibold text-xl md:text-2xl mb-2 uppercase tracking-wide">Anti-Rug Design</h3>
              <p className="text-base text-[#C2E9F9]">Contract-enforced protection by design.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-3xl p-6 md:p-8 rounded-full bg-gradient-to-br from-[#0A1228] via-[#111c3a] to-[#0A1228] border-4 border-[#00E5FF] shadow-[inset_0_0_30px_rgba(0,229,255,0.3),_0_0_20px_#00E5FF] backdrop-blur-md overflow-hidden text-center">
        <h3 className="text-[#00E5FF] font-semibold text-xl md:text-2xl mb-4">Future Ecosystem Growth</h3>
        <ul className="text-[#C2E9F9] text-base md:text-lg space-y-2">
          <li>Contract Creator</li>
          <li>Staking Platform</li>
          <li>Contract Audits with <span className="text-[#00E5FF] font-semibold">Divi Stamps</span> of approval</li>
        </ul>
      </div>

      <motion.a
        href="https://www.divivault.io/dashboard"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#00E5FF] text-black text-4xl font-bold py-6 px-20 rounded-full shadow-[0_0_20px_#00E5FF] transition-all duration-300"
      >
        Enter Ecosystem
      </motion.a>
    </div>
  );
}