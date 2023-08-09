import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <Link to="/" className="logo">
      {t('name')}
    </Link>
  );
};

export default Logo;
