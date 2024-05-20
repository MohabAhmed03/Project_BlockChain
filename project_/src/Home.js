// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Football Ticketing App</h1>
      <p className="home-description">Buy tickets for upcoming matches and enjoy the game!</p>
      <div className="button-container">
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
