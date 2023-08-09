import React from 'react';
import './index.css';
import {useTranslation} from "react-i18next";
const EducationList = ({ title, description, secondTitle }) => {
    const {t} = useTranslation()
  return (
    <div className="service-el">
      <h2>{t(title)}</h2>
      <h4>{t(secondTitle)}</h4>
      <p>{t(description)}</p>
    </div>
  );
};

export default EducationList;
