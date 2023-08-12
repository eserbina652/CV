import React from 'react';
import './index.css';
import TechnicalSkills from './TechnicalSkills';
import Languages from './languages/Languages';
import { Skills } from '../index';

const SkillsComponent = () => {
  return (
    <Skills>
      <section className="skills-component">
        <TechnicalSkills />
        <Languages />
      </section>
    </Skills>
  );
};

export default SkillsComponent;
