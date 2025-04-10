import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import StakingComingSoon from './components/StakingComingSoon';
import ContractCreatorComingSoon from './components/ContractCreatorComingSoon';
import ContractAuditsComingSoon from './components/ContractAuditsComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DiviDashboard />} />
        <Route path="/staking-coming-soon" element={<StakingComingSoon />} />
        <Route path="/contract-creator-coming-soon" element={<ContractCreatorComingSoon />} />
        <Route path="/contract-audits-coming-soon" element={<ContractAuditsComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
