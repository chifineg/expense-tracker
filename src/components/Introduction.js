import React from 'react';

function Introduction({ onGetStarted }) {
  return (
    <div className="container">
      <h1>Welcome to Expense Tracker</h1>
      <p>Track your expenses easily with efficiency and effectively. Manage your finances with ease.</p>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
}

export default Introduction;
