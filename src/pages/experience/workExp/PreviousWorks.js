import React from 'react';
import { WorkExpList, WorkSection } from './index';
import { workExpData } from '../../../API/data';
import MainTitle from '../../../components/title/MainTitle';
import { useTranslation } from 'react-i18next';

const PreviousWorks = () => {
  const { t } = useTranslation();
  return (
    <WorkSection>
      <MainTitle simpleText="simplePrevious" colorText="workExp" />
      <WorkExpList>
        {workExpData.map((el, i) => (
          <li key={i.toString()}>
            <p className="main-li-title">
              {el.dateOfWork} {t(el.jobTitle)}
            </p>
            <ul>
              <li>
                {t('companyName')}: {el.companyName}
              </li>
              <li>
                {t('location')}: {t(el.location)}
              </li>
              <li>
                {t('skills')}: {el.skills}
              </li>
              <li className="hovered-li">
                {t('portfolio')}:{' '}
                <a target="_blank" href={el.website.link}>
                  {el.website.name}
                </a>
              </li>
            </ul>
          </li>
        ))}
      </WorkExpList>
    </WorkSection>
  );
};

export default PreviousWorks;
