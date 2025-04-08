// Trigger redeploy to fix subpath routing
import React from 'react';
import ConnectWallet from './components/ConnectWallet'; // Import the ConnectWallet component

function App() {
  return (
    <div className="App">
      <h1>Welcome to Divi</h1>
      <ConnectWallet /> {/* Render the ConnectWallet component */}
    </div>
  );
}

export default App;
