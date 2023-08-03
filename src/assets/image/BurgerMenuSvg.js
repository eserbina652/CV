import React from 'react';
import { CloseBtn, BurgerSvg } from './index';

const BurgerMenuSvg = ({ isOpen }) => {
  return <>{isOpen ? <CloseBtn /> : <BurgerSvg />}</>;
};

export default BurgerMenuSvg;
