import React from 'react';
import '../index.css';
import { useTranslation } from 'react-i18next';
import { SVGText, Text } from '../../index';

const RadialBar = ({ presents, text, id, width = '100%', isLang = false }) => {
  const { t } = useTranslation();
  return (
    <div className="radial-bars" style={{ width }}>
      <svg className="radial-bar-svg" x="0px" y="0px" viewBox="0 0 200 200">
        <circle
          className="progress-bar"
          cx="100"
          cy="100"
          r="60"
          fill="none"
          strokeWidth="20"
        ></circle>
        <circle className={`path path-${id}`} cx="100" cy="100" r="60"></circle>
        <SVGText x="50%" y="50%" textAnchor="middle" dy="0.3em">
          {isLang ? t(presents) : presents}
        </SVGText>
      </svg>
      <Text>{t(text)}</Text>
    </div>
  );
};

export default RadialBar;
