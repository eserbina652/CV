import React from 'react';
import './index.css';
import Project from './Project';
import MainTitle from '../../../components/title/MainTitle';
import { portfolioData } from '../../../API/data';
import { Portfolio } from '../index';

const PortfolioSection = () => {
  return (
    <Portfolio>
      <div className="portfolio">
        <MainTitle simpleText="simpleLatest" colorText="colorProjects" />
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
    </Portfolio>
  );
};

export default PortfolioSection;
