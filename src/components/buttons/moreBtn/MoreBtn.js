import React from 'react';
import { useTranslation } from 'react-i18next';
import { AStyled, LinkStyled } from './index';

const MoreBtn = ({ link, text, href }) => {
  const { t } = useTranslation();
  return (
    <>
      {href ? (
        <AStyled href={href}>{t(text)}</AStyled>
      ) : (
        <LinkStyled to={link}>{t(text)}</LinkStyled>
      )}
    </>
  );
};

export default MoreBtn;
