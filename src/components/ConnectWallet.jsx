import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Log the window.ethereum object to check if MetaMask is available
      console.log(window.ethereum); 

      try {
        setIsProcessing(true);
        // Request account access
        console.log('Requesting account access...');
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        
        // Fetch account address and network details
        const userAccount = await signer.getAddress();
        const userNetwork = await provider.getNetwork();

        // Store account and network details
        setAccount(userAccount);
        setNetwork(userNetwork.name);
        setError(null);  // Clear any previous errors
        console.log('Connected account:', userAccount);
        console.log('Connected network:', userNetwork.name);

      } catch (err) {
        console.error('Error connecting to wallet:', err);
        setError('Error connecting to wallet. Please make sure MetaMask is installed and unlocked.');
      } finally {
        setIsProcessing(false);
      }
    } else {
      setError('MetaMask not detected. Please install MetaMask.');
    }
  };

  useEffect(() => {
    // Automatically attempt to connect if MetaMask is installed
    if (window.ethereum) {
      connectWallet();
    } else {
      console.log('MetaMask not installed');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white text-center pt-20">
      {account ? (
        <div>
          <h2 className="text-2xl text-cyan-300">Connected Account:</h2>
          <p className="text-xl">{account}</p>
          <p className="mt-4 text-lg">Network: {network}</p>
        </div>
      ) : (
        <div>
          <p>{error || 'Connect your MetaMask wallet'}</p>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            onClick={connectWallet}
            disabled={isProcessing}
          >
            {isProcessing ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
