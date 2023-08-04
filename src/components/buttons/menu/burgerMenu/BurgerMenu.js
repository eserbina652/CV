import React, { useState } from 'react';
import './index.css';
import { BurgerMenuSvg } from '../../../../assets/image';
import Logo from '../../../header/logo/Logo';
import Navbar from '../../../header/navBar/Navbar';
const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerActiveClass = isOpen ? 'open' : 'close';

  return (
    <div className="burgerMenu-wrap">
      <header className="burger-header">
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
