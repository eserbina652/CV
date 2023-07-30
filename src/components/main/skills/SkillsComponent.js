import React from 'react';
import './index.css';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';

const SkillsComponent = () => {
  return (
    <section className="skill-section">
      <h1 className="sub-title">
        My <span>TechnicalSkills</span>
      </h1>
      <section className="skills-component">
        <TechnicalSkills />
        <ProfessionalSkills />
      </section>
    </section>
  );
};

export default SkillsComponent;
