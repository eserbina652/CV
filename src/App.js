import React from 'react';
import Header from './components/header/Header';
import HomeSection from './sections/home/HomeSection';
import AboutSection from './sections/about/AboutSection';
import EducationComponent from './sections/education/EducationComponent';
import SkillsComponent from './sections/skills/SkillsComponent';
import PortfolioSection from './sections/portfolio/PortfolioSection';
import ContactSection from './sections/contact/ContactSection';
import useScreenSIze from './hooks/useScreenSIze';
import BurgerMenu from './components/header/burgerMenu/BurgerMenu';
import TopBtn from './components/buttons/goToTop/TopBtn';
import DevelopedBy from './components/texts/DevelopedBy';
const App = () => {
  const isMobile = useScreenSIze();
  return (
    <div>
      {isMobile ? <BurgerMenu /> : <Header />}
      <HomeSection />
      <AboutSection />
      <EducationComponent />
      <SkillsComponent />
      <PortfolioSection />
      <ContactSection />
      <DevelopedBy />
      <TopBtn />
    </div>
  );
};

export default App;
