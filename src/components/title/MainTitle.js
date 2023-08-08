import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

const MainTitle = ({ simpleText, colorText }) => {
  const { t } = useTranslation();
  return (
    <div className="mainTitle">
      <h2>
        {t(simpleText)} <span>{t(colorText)}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
