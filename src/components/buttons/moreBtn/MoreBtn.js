import React from 'react';
import { useTranslation } from 'react-i18next';
import { AStyled } from './index';

const MoreBtn = ({ text, href }) => {
  const { t } = useTranslation();
  return (
    <>
      <AStyled href={href}>{t(text)}</AStyled>
    </>
  );
};

export default MoreBtn;
