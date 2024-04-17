import React from 'react';
import './Header.css'; // Assuming a CSS file for styling the Header component

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/path/to/logo.png" alt="TrueUp Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li><a href="/jobs">JOBS</a></li>
          <li><a href="/trending">TRENDING</a></li>
          <li className="dropdown">
            <a href="#">MORE</a>
            <div className="dropdown-content">
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="/hire" className="btn hire">Hire on TrueUp</a>
        <a href="/login" className="btn login">Log in</a>
        <a href="/join" className="btn join">Join now</a>
      </div>
    </header>
  );
};

export default Header;