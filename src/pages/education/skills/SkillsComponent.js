import React from 'react';
import './index.css';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';
import MainTitle from '../../../components/title/MainTitle';
import Languages from './languages/Languages';

const SkillsComponent = () => {
  return (
    <section className="skill-section" id="skills">
      <MainTitle simpleText="simpleMySkills" colorText="colorSkills" />
      <section className="skills-component">
        <TechnicalSkills />
        <div className="round-skills">
          <Languages />
          <ProfessionalSkills />
        </div>
      </section>
    </section>
  );
};

export default SkillsComponent;
