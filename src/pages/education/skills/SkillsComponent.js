import React from 'react';
import './index.css';
import TechnicalSkills from './tech/TechnicalSkills';
import Languages from './languages/Languages';
import { Skills } from '../index';

const SkillsComponent = () => {
  return (
    <Skills>
      <input name="t" style={{ top: 0, position: 'absolute' }} />
      <section className="skills-component">
        <TechnicalSkills />
        <Languages />
      </section>
    </Skills>
  );
};

export default SkillsComponent;
