import React from 'react';
import './index.css';
import useScreenSIze from '../../../hooks/useScreenSIze';
import ChangeLangeBtn from '../../buttons/langBtn/ChangeLangeBtn';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ChangeThemeBtn from '../../buttons/changeTheme/ChangeThemeBtn';

const Navbar = ({ setOpen }) => {
  const navData = [
    { href: '/', onClick: () => setOpen(false), text: 'home' },
    { href: '/education', onClick: () => setOpen(false), text: 'education' },
    { href: '/portfolio', onClick: () => setOpen(false), text: 'portfolio' },
    { href: '/contact', onClick: () => setOpen(false), text: 'contact' },
  ];
  const isMobile = useScreenSIze();
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      {isMobile ? (
        <>
          <ChangeThemeBtn />
          <ChangeLangeBtn />
          {navData.map((link, i) => (
            <Link key={i.toString()} to={link.href} onClick={link.onClick}>
              {t(link.text)}
            </Link>
          ))}
        </>
      ) : (
        <>
          <ChangeThemeBtn />
          <ChangeLangeBtn />
          {navData.map((link, i) => (
            <Link key={i.toString()} to={link.href}>
              {t(link.text)}
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};

export default Navbar;
