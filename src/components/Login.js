import React, { useState } from 'react';
import { login } from '../api';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(username, password);
    if (data) {
      localStorage.setItem('token', data.token);
      onLogin();
    } else {
      alert('Invalid credentials');
    }
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
