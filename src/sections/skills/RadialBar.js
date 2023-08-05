import React from 'react';
import './index.css';

const RadialBar = ({ presents, text, id, width = '100%' }) => {
  return (
    <div className="radial-bars" style={{ width }}>
      <svg className="radial-bar-svg" x="0px" y="0px" viewBox="0 0 200 200">
        <circle
          className="progress-bar"
          cx="100"
          cy="100"
          r="80"
          fill="none"
          strokeWidth="20"
        ></circle>
        <circle className={`path path-${id}`} cx="100" cy="100" r="80"></circle>
        <text
          className="svgText"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fill="white"
        >
          {presents}
        </text>
      </svg>
      <div className={'text1'}>{text}</div>
    </div>
  );
};

export default RadialBar;
