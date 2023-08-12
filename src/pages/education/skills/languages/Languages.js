import React from 'react';
import RadialBar from '../RadialBar';
import './index.css';
import { languagesData } from '../../../../API/data';
import MainTitle from '../../../../components/title/MainTitle';
import { ProfSkillsWrap } from '../../index';

const Languages = () => {
  return (
    <section className="container1" id="languages">
      <MainTitle simpleText="simpleMySkills" colorText="languages" />
      <ProfSkillsWrap>
        {languagesData.map((skill) => (
          <RadialBar
            isLang={true}
            key={skill.id}
            presents={skill.presents}
            text={skill.text}
            id={skill.id}
          />
        ))}
      </ProfSkillsWrap>
    </section>
  );
};

export default Languages;
