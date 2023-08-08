import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import useScreenSIze from '../../hooks/useScreenSIze';

const RadialBar = ({ presents, text, id, width = '100%', isLang = false }) => {
  const { t } = useTranslation();
  const isMobile = useScreenSIze();
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
        <circle
          className={`path path-${id}`}
          cx="100"
          cy="100"
          r={isMobile ? '60' : '80'}
        ></circle>
        <text
          className="svgText"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fill="white"
        >
          {isLang ? t(presents) : presents}
        </text>
      </svg>
      <div className={'text1'}>{t(text)}</div>
    </div>
  );
};

export default RadialBar;
