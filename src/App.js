import React from 'react';
import Header from './components/header/Header';
import HomeSection from './sections/home/HomeSection';
import AboutSection from './sections/about/AboutSection';
import EducationComponent from './sections/education/EducationComponent';
import SkillsComponent from './sections/skills/SkillsComponent';
import PortfolioSection from './sections/portfolio/PortfolioSection';
import ContactSection from './sections/contact/ContactSection';
import { TopArrowSvg } from './assets/image';
import './app.css';
import Languages from './sections/languages/Languages';
//Todo: dont forget to change all titles to component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HomeSection />
      <AboutSection />
      <EducationComponent />
      <Languages />
      <SkillsComponent />
      <PortfolioSection />
      <ContactSection />
      <div className="latest-text">
        <p>Developed with love by Yevheniia Shcherbina Ⓒ 2023</p>
      </div>
      <a href="#" className="top">
        <TopArrowSvg />
      </a>
    </div>
  );
};

export default App;
