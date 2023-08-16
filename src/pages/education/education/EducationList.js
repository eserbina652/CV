import React from 'react';
import { useTranslation } from 'react-i18next';
import { Service } from '../index';

const EducationList = ({ title, description, secondTitle, mentor }) => {
  const { t } = useTranslation();
  return (
    <Service>
      {mentor ? (
        <a target="_blank" href={mentor}>
          {t(title)}
        </a>
      ) : (
        <h2>{t(title)}</h2>
      )}
      <h4>{t(secondTitle)}</h4>
      <p>{t(description)}</p>
    </Service>
  );
};

export default EducationList;
