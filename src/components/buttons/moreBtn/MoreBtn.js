import React from 'react';
import './index.css';
const MoreBtn = ({ href, text, className }) => {
  return (
    <a href={href} className={`btn-box ${className}`}>
      {text}
    </a>
  );
};

export default MoreBtn;
