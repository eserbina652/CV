import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

const MoreBtn = ({ href, text, className }) => {
  const { t } = useTranslation();
  return (
    <a href={href} className={`btn-box ${className}`}>
      {t(text)}
    </a>
  );
};

export default MoreBtn;
