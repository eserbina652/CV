import React from 'react';
import './index.css';
import Project from './Project';
import { FID, RickAndMorty, ShopPinkStore } from '../../../assets/image';

const portfolioData = [
  {
    img: FID,
    title: 'Gatsby/React Developer',
    description:
      'This site was created for the Ukrainian public organization "FID". My role in project was making the component layOut with custom routing/localization for further integration with the backend)',
    technology: 'Gatsby.js/React, JavaScript, react-icon-cloud, i18n',
    id: 1,
    commercial: true,
    hrefToWebSite: 'https://fid-freelance-a7lz7ry6j-eserbina652.vercel.app/',
    hrefToGitHub:
      "It was a commercial project, I don't have right to share the code",
  },
  {
    img: RickAndMorty,
    title: 'Vanilla JavaScript Developer',
    description:
      'In this project you will see the one-page website with two sections, in the first one, there is an interactive table, and in the second a list of characters received from the server against which the Canvas is located.',
    technology: 'HTML, CSS, JavaScript Vanilla',
    id: 2,
    commercial: false,
    hrefToWebSite: 'https://shop-pink-store.vercel.app/',
    hrefToGitHub: 'https://github.com/eserbina652/JS-RickAndMorty-Project',
  },
  {
    img: ShopPinkStore,
    title: 'React.ts Developer',
    description:
      'In this project, authorization will be required to enter: username: kminchelle / password: 0lelplR. On the main page, you can enjoy the Canvas, as well as go to the store to buy various goods, and many more interesting things, go and try)',
    technology:
      'TypeScript, React(hooks)/React-Router, Redux-Toolkit, Yup, Styled-components, Formik',
    id: 3,
    commercial: false,
    hrefToWebSite: 'https://shop-pink-store.vercel.app/',
    hrefToGitHub: 'https://github.com/eserbina652/shopPink_Store/tree/master',
  },
];
const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div id="portfolio" className="portfolio">
        <div className="main-text" id="project">
          <h2>
            Latest<span>Project</span>
          </h2>

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
      </div>
    </section>
  );
};

export default PortfolioSection;
