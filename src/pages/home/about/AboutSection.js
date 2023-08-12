import React from 'react';
import AvatarComponent from '../../../components/pictures/AvatarComponent';
import './index.css';
import MoreBtn from '../../../components/buttons/moreBtn/MoreBtn';
import { MyPhoto } from '../../../assets/image/svg';
import MainTitle from '../../../components/title/MainTitle';
import { skillsArrayData } from '../../../API/data';
import { useTranslation } from 'react-i18next';
import { About, TextContainer } from '../index';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <About id="about">
      <div className="about-img">
        <AvatarComponent
          src={MyPhoto}
          styles={{ width: '100%', height: '100%' }}
        />
      </div>
      <TextContainer>
        <MainTitle simpleText="simpleAbout" colorText="colorMe" />
        <h4>React Developer</h4>
        <div className="about-description">
          {t('countOnMe')}
          <ul>
            {skillsArrayData.map((skill, i) => (
              <li key={i.toString()}>{t(skill)}</li>
            ))}
          </ul>
        </div>
        <MoreBtn link="/education" text="moreAboutSkills" />
      </TextContainer>
    </About>
  );
};

export default AboutSection;
