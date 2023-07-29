import React from 'react';
import Header from './components/header/Header';
import HomeSection from './components/main/home/HomeSection';
import AboutSection from './components/main/about/AboutSection';
import EducationComponent from './components/education/EducationComponent';
import SkillsComponent from './components/main/skills/SkillsComponent';
import PortfolioSection from './components/main/portfolio/PortfolioSection';
import ContactSection from './components/main/contact/ContactSection';
import { TopArrowSvg } from './assets/image';
import './app.css';
const App = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <EducationComponent />
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
