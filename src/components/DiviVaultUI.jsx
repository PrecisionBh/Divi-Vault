import React, { useState } from 'react';
import ChainSelection from './VaultFlow/Chainselection';
import LockTypeSelection from './VaultFlow/LockTypeselection';
import LPForm from './VaultFlow/LPForm';
import TeamTokenForm from './VaultFlow/TeamTokenForm';
import BoostOptions from './VaultFlow/BoostOptions';
import LoadingPage from './VaultFlow/Loadingpage';
import SuccessPage from './VaultFlow/SuccessPage';
import FailurePage from './VaultFlow/FailurePage';

export default function DiviVaultUI() {
  const [step, setStep] = useState(0);
  const [lockType, setLockType] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const goToFailure = () => setStep(7);
  const goToSuccess = () => setStep(6);

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
        {step === 0 && <ChainSelection nextStep={nextStep} />}
        {step === 1 && (
          <LockTypeSelection
            nextStep={(type) => {
              setLockType(type);
              setStep(2);
            }}
            prevStep={prevStep}
          />
        )}
        {step === 2 && lockType === 'LP' && <LPForm nextStep={nextStep} prevStep={prevStep} />}
        {step === 2 && lockType === 'Team' && <TeamTokenForm nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <BoostOptions nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <LoadingPage nextStep={goToSuccess} failStep={goToFailure} />}
        {step === 5 && <SuccessPage />}
        {step === 6 && <FailurePage />}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
      <footer className="mt-32 mb-8 text-center text-sm text-gray-500 z-10 relative">
        Divi Vault © 2025 — All rights reserved
      </footer>
    </div>
  );
}
