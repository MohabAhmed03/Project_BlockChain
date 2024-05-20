// src/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import contract from './contract';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const user = await contract.methods.users(accounts[0]).call();
    if (user.email === email && user.password === password) {
      alert('Login successful');
      // Navigate to the booking page after successful login using Link
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-form">
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="link-container">
        <Link to="/register">Register</Link> {/* Button to navigate to the register page */}
        <Link to="/booking">Continue without login</Link> {/* Button to navigate to the booking page without login */}
      </div>
    </div>
  );
};

export default Login;
