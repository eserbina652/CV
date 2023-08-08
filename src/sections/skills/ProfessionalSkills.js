import React from 'react';
import './index.css';
import RadialBar from './RadialBar';
import { professionalSkillsData } from '../../API/data';
import {useTranslation} from "react-i18next";

const ProfessionalSkills = () => {
    const {t} = useTranslation()
  return (
    <div className="container1">
      <h1 className="heading1">{t('profSkills')}</h1>
      <div className="profSkillsWrap">
        {professionalSkillsData.map((skill) => (
          <RadialBar
            key={skill.id}
            presents={skill.presents}
            text={skill.text}
            id={skill.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkills;
