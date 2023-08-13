import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { LatestText } from './index';

const DevelopedBy = () => {
  const { t } = useTranslation();
  return (
    <LatestText>
      <p>{t('developedBy')}</p>
    </LatestText>
  );
};

export default DevelopedBy;
