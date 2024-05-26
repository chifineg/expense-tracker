import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    onSignup();
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="signup-username">Username</label>
          <input type="text" id="signup-username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-control">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
