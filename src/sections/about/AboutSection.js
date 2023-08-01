import React from 'react';
import AvatarComponent from '../../components/avatar/AvatarComponent';
import './index.css';
import MoreBtn from '../../components/buttons/moreBtn/MoreBtn';
import { MyPhoto } from '../../assets/image';
import MainTitle from '../../components/title/MainTitle';
const skillsArrayData = [
  'Dynamic & responsive website design.',
  'State management for seamless experiences.',
  'Maintainable UI component crafting.',
  'Effective troubleshooting of complex issues.',
  'Adapting projects to latest standards.',
  'Collaborating within diverse teams.',
  'Version control for efficient code management.',
  'Deploying applications for accessibility.',
  'Proficiency across multiple operating systems.',
  'Visually captivating functional websites.',
  'Smooth navigation implementation.',
  'Prioritizing performance & accessibility.',
  'Secure data handling & API interactions.',
];

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <AvatarComponent
          src={MyPhoto}
          styles={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="about-text">
        <MainTitle simpleText="About" colorText="Me" />
        {/*<h2>*/}
        {/*  About <span>Me</span>*/}
        {/*</h2>*/}
        <h4>React Developer</h4>
        <span>
          You can count on me at:
          <ul>
            {skillsArrayData.map((skill, i) => (
              <li key={i.toString()}>{skill}</li>
            ))}
          </ul>
        </span>
        <MoreBtn href="#skills" text="More About my Skills" />
      </div>
    </section>
  );
};

export default AboutSection;
