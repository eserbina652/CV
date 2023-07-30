import React from 'react';
import AvatarComponent from '../../avatar/AvatarComponent';
import './index.css';
import MoreBtn from '../../buttons/moreBtn/MoreBtn';
const skillsArrayData = [
  'Dynamic & responsive website design.',
  'State management for seamless experiences.',
  'User-friendly form validation & localization.',
  'Maintainable UI component crafting.',
  'Efficient handling of API data.',
  'Thorough testing for robust apps.',
  'Effective troubleshooting of complex issues.',
  'Adapting projects to latest standards.',
  'Collaborating within diverse teams.',
  'Version control for efficient code management.',
  'Deploying applications for accessibility.',
  'Proficiency across multiple operating systems.',
  'Visually captivating functional websites.',
  'Collaborative design tool utilization.',
  'Smooth navigation implementation.',
  'Prioritizing performance & accessibility.',
  'Secure data handling & API interactions.',
];

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <AvatarComponent styles={{ width: '100%', height: '100%' }} />
      </div>
      <div className="about-text">
        <h2>
          About <span>Me</span>
        </h2>
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
