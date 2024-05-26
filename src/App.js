import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true); // Assume signup also logs the user in
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <ExpenseTracker />
      ) : isSigningUp ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {!isLoggedIn && (
        <button onClick={() => setIsSigningUp(!isSigningUp)}>
          {isSigningUp ? 'Switch to Login' : 'Switch to Signup'}
        </button>
      )}
    </div>
  );
}

export default App;
