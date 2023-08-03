import React from 'react';
import RadialBar from '../skills/RadialBar';
import './index.css';
import MainTitle from '../../components/title/MainTitle';
import { languagesData } from '../../API/data';

const Languages = () => {
  return (
    <section className="lang-section" id="languages">
      <MainTitle simpleText="My" colorText="Languages" />
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
