import React from 'react';
import AvatarComponent from '../../components/avatar/AvatarComponent';
import './index.css';
import MoreBtn from '../../components/buttons/moreBtn/MoreBtn';
import { MyPhoto } from '../../assets/image';
import MainTitle from '../../components/title/MainTitle';
import { skillsArrayData } from '../../API/data';

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
        <h4>React Developer</h4>
        <div className="about-content">
          You can count on me at:
          <ul>
            {skillsArrayData.map((skill, i) => (
              <li key={i.toString()}>{skill}</li>
            ))}
          </ul>
        </div>
        <MoreBtn href="#skills" text="More About my Skills" />
      </div>
    </section>
  );
};

export default AboutSection;
