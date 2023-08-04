import React from 'react';
import RadialBar from '../RadialBar';
import './index.css';
import { languagesData } from '../../../API/data';

const Languages = () => {
  return (
    <section className="lang-section" id="languages">
      <h1 className="heading1">Languages</h1>
      <div className="lang-wrap">
        {languagesData.map((skill) => (
          <RadialBar
            isSkills={false}
            key={skill.id}
            presents={skill.presents}
            text={skill.text}
            id={skill.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
