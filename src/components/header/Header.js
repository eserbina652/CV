import React from 'react';
import './index.css';
import Navbar from './navBar/Navbar';
import Logo from '../texts/Logo';
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
