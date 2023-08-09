import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <a href="#" className="logo">
      {t('name')}
    </a>
  );
};

export default Logo;
