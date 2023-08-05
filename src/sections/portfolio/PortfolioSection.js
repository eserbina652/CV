import React from 'react';
import './index.css';
import Project from './Project';
import MainTitle from '../../components/title/MainTitle';
import { portfolioData } from '../../API/data';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio">
        <MainTitle simpleText="Latest" colorText="Project" />
        <div className="portfolio-content">
          {portfolioData.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              website={project.hrefToWebSite}
              gitHub={project.hrefToGitHub}
              technology={project.technology}
              commercial={project.commercial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
