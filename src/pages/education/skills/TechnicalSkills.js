import React from 'react';
import SkillsBar from './SkillsBar';
import './index.css';
import { skillsData } from '../../../API/data';
import { useTranslation } from 'react-i18next';

const TechnicalSkills = () => {
  const { t } = useTranslation();
  return (
    <div className="Technical-bars-wrap">
      <h1 className="heading1">{t('techskills')}</h1>
      <div className="Technical-bars">
        {skillsData.map((skillEl, i) => (
          <SkillsBar
            svgComponent={skillEl.svgComponent}
            skill={skillEl.skill}
            key={i.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
