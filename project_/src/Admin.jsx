// src/Admin.jsx
import React, { useState } from 'react';
import contract from './contract';
import './Admin.css';  // Import the CSS file

const Admin = () => {
  const [matchData, setMatchData] = useState({
    teamA: '',
    teamB: '',
    ticketPrice: '',
    ticketCapacity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addMatch = async (e) => {
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await contract.methods.addMatch(
        matchData.teamA,
        matchData.teamB,
        matchData.ticketPrice,
        matchData.ticketCapacity
      ).send({ from: accounts[0] });

      alert('Match added successfully!');

    } catch (error) {
      console.error('Error adding match:', error);
      alert('Error adding match. Please try again.');
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin</h2>
      <form className="admin-form" onSubmit={addMatch}>
        <label>
          Team A:
          <input
            type="text"
            name="teamA"
            value={matchData.teamA}
            onChange={handleChange}
          />
        </label>
        <label>
          Team B:
          <input
            type="text"
            name="teamB"
            value={matchData.teamB}
            onChange={handleChange}
          />
        </label>
        <label>
          Ticket Price:
          <input
            type="text"
            name="ticketPrice"
            value={matchData.ticketPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          Ticket Capacity:
          <input
            type="text"
            name="ticketCapacity"
            value={matchData.ticketCapacity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Match</button>
      </form>
    </div>
  );
};

export default Admin;
