import React from 'react';
import Header from './components/header/Header';
import HomeSection from './components/main/home/HomeSection';
import AboutSection from './components/main/about/AboutSection';
import EducationComponent from './components/main/education/EducationComponent';
import SkillsComponent from './components/main/skills/SkillsComponent';
import PortfolioSection from './components/main/portfolio/PortfolioSection';
import ContactSection from './components/main/contact/ContactSection';
import { TopArrowSvg } from './assets/image';
import './app.css';
import Languages from './components/main/languages/Languages';
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
