import React from 'react';
import './index.css';
import useScreenSIze from '../../../hooks/useScreenSIze';

const Navbar = ({ setOpen }) => {
  const navData = [
    { href: '#', onClick: () => setOpen(false), text: 'Home' },
    { href: '#about', onClick: () => setOpen(false), text: 'About' },
    { href: '#education', onClick: () => setOpen(false), text: 'Education' },
    { href: '#skills', onClick: () => setOpen(false), text: 'Skills' },
    { href: '#portfolio', onClick: () => setOpen(false), text: 'Portfolio' },
    { href: '#contact', onClick: () => setOpen(false), text: 'Contact' },
  ];
  const isMobile = useScreenSIze();
  return (
    <nav className="navbar">
      {isMobile ? (
        <>
          {navData.map((link, i) => (
            <a key={i.toString()} href={link.href} onClick={link.onClick}>
              {link.text}
            </a>
          ))}
        </>
      ) : (
        <>
          {navData.map((link, i) => (
            <a key={i.toString()} href={link.href}>
              {link.text}
            </a>
          ))}
        </>
      )}
    </nav>
  );
};

export default Navbar;
