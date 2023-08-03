import React from 'react';
import './index.css';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';
import MainTitle from '../../components/title/MainTitle';

const SkillsComponent = () => {
  return (
    <section className="skill-section">
      <MainTitle simpleText="My" colorText="Skills" />
      <section className="skills-component">
        <TechnicalSkills />
        <ProfessionalSkills />
      </section>
    </section>
  );
};

export default SkillsComponent;
