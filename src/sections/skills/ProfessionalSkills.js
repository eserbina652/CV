import React from 'react';
import './index.css';
import RadialBar from './RadialBar';

const professionalSkillsData = [
  {
    presents: '95%',
    text: 'Team Work',
    id: 1,
  },
  {
    presents: '90%',
    text: 'Communication',
    id: 2,
  },
  {
    presents: '95%',
    text: 'Fast learning',
    id: 3,
  },
  {
    presents: '85%',
    text: 'Problem Solving',
    id: 4,
  },
];
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
