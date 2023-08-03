import React from 'react';
import Link from './Link';
import { socialMediaData } from '../../../API/data';
import './index.css';
const HoveredLinks = () => {
  return (
    <div className="home-sci">
      {socialMediaData.map((el) => (
        <Link el={el} key={el.id} href={el.href} />
      ))}
    </div>
  );
};

export default HoveredLinks;
