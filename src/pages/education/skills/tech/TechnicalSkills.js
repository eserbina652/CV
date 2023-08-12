import React from 'react';
import SkillsBar from './SkillsBar';
import '../index.css';
import { skillsData } from '../../../../API/data';
import MainTitle from '../../../../components/title/MainTitle';
import { TechnicalBar } from '../../index';

const TechnicalSkills = () => {
  return (
    <div className="Technical-bars-wrap">
      <MainTitle simpleText="tech" colorText="skillsT" />
      <TechnicalBar>
        {skillsData.map((skillEl, i) => (
          <SkillsBar
            svgComponent={skillEl.svgComponent}
            skill={skillEl.skill}
            key={i.toString()}
          />
        ))}
      </TechnicalBar>
    </div>
  );
};

export default TechnicalSkills;
