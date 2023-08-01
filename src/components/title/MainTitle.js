import React from 'react';
import './index.css';

const MainTitle = ({ simpleText, colorText }) => {
  return (
    <div className="mainTitle">
      <h2>
        {simpleText} <span>{colorText}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
