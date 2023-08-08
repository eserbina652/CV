import React from 'react';
import './index.css';
import useScreenSIze from '../../../hooks/useScreenSIze';
import ChangeLangeBtn from '../../buttons/langBtn/ChangeLangeBtn';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setOpen }) => {
  const navData = [
    { href: '#', onClick: () => setOpen(false), text: 'home' },
    { href: '#about', onClick: () => setOpen(false), text: 'about' },
    { href: '#education', onClick: () => setOpen(false), text: 'education' },
    { href: '#skills', onClick: () => setOpen(false), text: 'skills' },
    { href: '#portfolio', onClick: () => setOpen(false), text: 'portfolio' },
    { href: '#contact', onClick: () => setOpen(false), text: 'contact' },
  ];
  const isMobile = useScreenSIze();
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      {isMobile ? (
        <>
          <ChangeLangeBtn />
          {navData.map((link, i) => (
            <a key={i.toString()} href={link.href} onClick={link.onClick}>
              {t(link.text)}
            </a>
          ))}
        </>
      ) : (
        <>
          <ChangeLangeBtn />
          {navData.map((link, i) => (
            <a key={i.toString()} href={link.href}>
              {t(link.text)}
            </a>
          ))}
        </>
      )}
    </nav>
  );
};

export default Navbar;
