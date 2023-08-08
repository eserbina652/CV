import React, { useState } from 'react';
import i18n from '../../../i18n.config';
import { useTranslation } from 'react-i18next';
import './index.css';
const ChangeLangeBtn = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState('en');
  const handleClick = () => {
    let newLang = 'en';
    if (lang === 'en') {
      newLang = 'uk';
    } else if (lang === 'uk') {
      newLang = 'pl';
    } else if (lang === 'pl') {
      newLang = 'en';
    }
    i18n.changeLanguage(newLang).finally(() => {
      localStorage.setItem('lang', newLang);
      setLang(newLang);
    });
  };
  return (
    <div className="langBtn" onClick={handleClick}>
      {t('lang')}
    </div>
  );
};

export default ChangeLangeBtn;
