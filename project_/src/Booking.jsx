// src/Booking.jsx
import React, { useState, useEffect } from 'react';
import contract from './contract';
import './Booking.css';  // Import the CSS file

const Booking = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [account, setAccount] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      const matchCount = await contract.methods.nextMatchId().call();
      const matches = [];
      for (let i = 0; i < matchCount; i++) {
        const match = await contract.methods.matches(i).call();
        matches.push(match);
      }
      setMatches(matches);
    };

    const loadAccount = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    };

    fetchMatches();
    loadAccount();
  }, []);

  const bookTicket = async () => {
    if (selectedMatchId === null) {
      alert('Please select a match first');
      return;
    }

    const match = matches[selectedMatchId];
    if (!match.isOpenForBooking) {
      alert('Ticket booking for this match is closed');
      return;
    }

    await contract.methods.bookTicket(selectedMatchId).send({ from: account, value: match.ticketPrice });
    alert('Ticket booked successfully');
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Tickets</h2>
      <ul className="match-list">
        {matches.map((match, index) => (
          <li key={match.matchId}>
            {match.teamA} vs {match.teamB} - {match.ticketPrice} wei
            <button onClick={() => setSelectedMatchId(index)}>Select</button>
          </li>
        ))}
      </ul>
      <button className="book-button" onClick={bookTicket} disabled={selectedMatchId === null}>
        Book Selected Match
      </button>
    </div>
  );
};

export default Booking;
