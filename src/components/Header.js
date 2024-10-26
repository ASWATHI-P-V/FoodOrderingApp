// components/Header.js
import React from 'react';
import './Header.css';
import './Menu.js';
import './Cart.js';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Foodies Hub</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="./Menu">Menu</a></li>
          <li><a href="#about">Search</a></li>
          <li><a href="#contact">Help</a></li>
          <li><a href="#signin">Sign In</a></li>
          <li><a href="./Cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
