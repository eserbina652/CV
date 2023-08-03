import React from 'react';
import './index.css';
import HoveredLinks from '../../components/links/hoveredLinks/HoveredLinks';
import AvatarComponent from '../../components/avatar/AvatarComponent';
import MoreBtn from '../../components/buttons/moreBtn/MoreBtn';
import JobsTyping from '../../components/customElements/JobsTyping';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-description">
          <h3 className="top-text">Hello, It's Me</h3>
          <h1>Yevheniia Shcherbina</h1>
          <h3 className="jobsArrHome">
            And I'm a <JobsTyping />
          </h3>
          <p>
            As an aspiring React developer, I have some experience with one
            commercial project and a strong passion for continuous learning. I
            am currently seeking new career opportunities to further grow and
            excel in the tech industry. My adaptability and enthusiasm make me a
            valuable asset for any company looking for a motivated professional
            to take on exciting projects.
          </p>
          <HoveredLinks />
          <MoreBtn href={'#about'} text={'More About Me'} />
        </div>
        <AvatarComponent />
      </div>
    </section>
  );
};

export default HomeSection;
