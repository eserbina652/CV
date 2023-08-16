import React from 'react';
import './index.css';
import useScreenSIze from '../../../hooks/useScreenSIze';
import ChangeLangeBtn from '../../../components/buttons/langBtn/ChangeLangeBtn';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ChangeThemeBtn from '../../../components/buttons/changeTheme/ChangeThemeBtn';

const Navbar = ({ setOpen }) => {
  const navData = [
    { href: '/', onClick: () => setOpen(false), text: 'aboutMe' },
    { href: '/education', onClick: () => setOpen(false), text: 'skills' },
    { href: '/experience', onClick: () => setOpen(false), text: 'experience' },
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
