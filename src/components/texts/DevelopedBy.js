import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
const DevelopedBy = () => {
  const { t } = useTranslation();
  return (
    <div className="latest-text">
      <p>{t('developedBy')}</p>
    </div>
  );
};

export default DevelopedBy;
