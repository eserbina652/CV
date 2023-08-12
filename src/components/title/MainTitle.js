import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from './index';

const MainTitle = ({ simpleText, colorText = '' }) => {
  const { t } = useTranslation();
  return (
    <Title>
      <h2>
        {t(simpleText)} <span>{t(colorText)}</span>
      </h2>
    </Title>
  );
};

export default MainTitle;
