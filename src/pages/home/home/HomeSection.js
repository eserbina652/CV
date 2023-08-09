import React from 'react';
import './index.css';
import HoveredLinks from '../../../components/links/hoveredLinks/HoveredLinks';
import AvatarComponent from '../../../components/pictures/AvatarComponent';
import MoreBtn from '../../../components/buttons/moreBtn/MoreBtn';
import JobsTyping from '../../../components/dynamicElements/JobsTyping';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="home" id="#">
      <div className="home-content">
        <div className="home-description">
          <h3>{t('hello')}</h3>
          <h1>{t('name')}</h1>
          <h3 className="jobsArrHome">
            {t('iAm')} <JobsTyping />
          </h3>
          <p>{t('homeDescription')}</p>
          <HoveredLinks />
          <MoreBtn href={'#about'} text={'moreAboutMe'} />
        </div>
        <AvatarComponent />
      </div>
    </section>
  );
};

export default HomeSection;
