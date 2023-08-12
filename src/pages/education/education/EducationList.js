import React from 'react';
import { useTranslation } from 'react-i18next';
import { Service } from '../index';

const EducationList = ({ title, description, secondTitle }) => {
  const { t } = useTranslation();
  return (
    <Service>
      <h2>{t(title)}</h2>
      <h4>{t(secondTitle)}</h4>
      <p>{t(description)}</p>
    </Service>
  );
};

export default EducationList;
