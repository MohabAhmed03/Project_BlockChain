// src/Register.jsx
import React, { useState } from 'react';
import './Register.css';
import contract from './contract';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    await contract.methods.register(firstName, lastName, idNumber, email, password).send({ from: accounts[0] });
    alert('Registration successful');
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="ID Number" 
          value={idNumber} 
          onChange={(e) => setIdNumber(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
