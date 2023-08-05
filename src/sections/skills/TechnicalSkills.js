import React from 'react';
import SkillsBar from './SkillsBar';
import './index.css';
import { skillsData } from '../../API/data';

const TechnicalSkills = () => {
  return (
    <div>
      <h1 className="heading1">Technical Skills</h1>
      <div className="Technical-bars">
        {skillsData.map((skillEl, i) => (
          <SkillsBar
            svgComponent={skillEl.svgComponent}
            additionalClass={skillEl.additionalClass}
            skill={skillEl.skill}
            key={i.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
