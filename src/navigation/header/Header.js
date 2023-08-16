import React from 'react';
import './index.css';
import Navbar from './navBar/Navbar';
import Logo from '../../components/texts/Logo';
import { HeaderWrap } from './index';

const Header = () => {
  return (
    <HeaderWrap>
      <div className="header-content">
        <Logo />
        <Navbar />
      </div>
    </HeaderWrap>
  );
};

export default Header;
