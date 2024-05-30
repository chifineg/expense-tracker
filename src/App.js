import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Login from './components/Login';
import Signup from './components/Signup';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowIntro(true);
  };

  const handleGetStarted = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <ExpenseTracker />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : showIntro ? (
        <Introduction onGetStarted={handleGetStarted} />
      ) : isSigningUp ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {!isLoggedIn && !showIntro && (
        <button onClick={() => setIsSigningUp(!isSigningUp)}>
          {isSigningUp ? 'Switch to Login' : 'Switch to Signup'}
        </button>
      )}
    </div>
  );
}

export default App;
