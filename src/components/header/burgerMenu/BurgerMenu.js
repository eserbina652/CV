import React, { useState } from 'react';
import './index.css';
import { BurgerMenuSvg } from '../../../assets/image/svg';
import Logo from '../../texts/Logo';
import Navbar from '../navBar/Navbar';
const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerActiveClass = isOpen ? 'open' : 'close';
  return (
    <div>
      <header className="header">
        <Logo />
        <div onClick={() => setOpen(!isOpen)}>
          <BurgerMenuSvg isOpen={isOpen} />
        </div>
      </header>
      <div className={`burgerMenu ${burgerActiveClass}`}>
        <Navbar setOpen={setOpen} />
      </div>
    </div>
  );
};

export default BurgerMenu;
