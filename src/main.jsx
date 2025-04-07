import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App'; // Import Main App component
import LandingPage from './components/LandingPage'; // Import LandingPage component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import DiviVaultUI from './components/DiviVaultUI'; // Import DiviVaultUI component
import DiviTokenInfo from './components/DiviTokenInfo'; // Import DiviTokenInfo component
import ConnectWallet from './components/ConnectWallet'; // Import ConnectWallet component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vault" element={<DiviVaultUI />} />
        <Route path="/token" element={<DiviTokenInfo />} />
        <Route path="/connect" element={<ConnectWallet />} /> {/* Route for wallet connection */}
      </Routes>
    </Router>
  </React.StrictMode>
);
