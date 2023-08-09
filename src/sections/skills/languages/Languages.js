import React from 'react';
import RadialBar from '../RadialBar';
import './index.css';
import { languagesData } from '../../../API/data';
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { t } = useTranslation();
  return (
    <section className="container1" id="languages">
      <h1 className="heading1">{t('languages')}</h1>
      <div className="profSkillsWrap">
        {languagesData.map((skill) => (
          <RadialBar
            isLang={true}
            key={skill.id}
            presents={skill.presents}
            text={skill.text}
            id={skill.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
