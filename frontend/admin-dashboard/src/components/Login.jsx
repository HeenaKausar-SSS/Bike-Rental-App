// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let history = useNavigate();  
  let auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        auth.login(response.data.token);
        history.push('/admin');
      })
      .catch(error => {
        setError('Invalid email or password');
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <span>{error}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
