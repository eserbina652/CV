import React from 'react';
import './index.css';
const EducationList = ({ title, description, secondTitle }) => {
  return (
    <div className="service-el">
      <h2>{title}</h2>
      <h4>{secondTitle}</h4>
      <p>{description}</p>
    </div>
  );
};

export default EducationList;
