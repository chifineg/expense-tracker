import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    onLogin();
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="login-username">Username</label>
          <input type="text" id="login-username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-control">
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
