import React from 'react';
import RadialBar from '../skills/RadialBar';
import './index.css';

const languagesData = [
  {
    text: 'Upper-Intermediate',
    presents: 'English',
    id: '5',
  },
  {
    text: 'Intermediate',
    presents: 'Polish',
    id: '6',
  },
  {
    text: 'Native Speaker',
    presents: 'Ukrainian',
    id: '7',
  },
  {
    text: 'Native Speaker',
    presents: 'Russian',
    id: '8',
  },
];
const Languages = () => {
  return (
    <section className="lang-section" id="languages">
      <h1 className="sub-title">
        My <span>Languages</span>
      </h1>
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
