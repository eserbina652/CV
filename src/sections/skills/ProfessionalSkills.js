import React from 'react';
import './index.css';
import RadialBar from './RadialBar';
import { professionalSkillsData } from '../../API/data';

const ProfessionalSkills = () => {
  return (
    <div className="container1">
      <h1 className="heading1">Professional Skills</h1>
      {professionalSkillsData.map((skill) => (
        <RadialBar
          key={skill.id}
          presents={skill.presents}
          text={skill.text}
          id={skill.id}
        />
      ))}
    </div>
  );
};

export default ProfessionalSkills;
