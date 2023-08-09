import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MoreBtn = ({ href, link, text, className }) => {
  const { t } = useTranslation();
  return (
    <>
      {href ? (
        <a href={href} className={`btn-box ${className}`}>
          {t(text)}
        </a>
      ) : (
        <Link to={link} className={`btn-box ${className}`}>
          {t(text)}
        </Link>
      )}
    </>
  );
};

export default MoreBtn;
