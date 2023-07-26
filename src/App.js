import React from 'react';
import Header from "./components/header/Header";
import HomeSection from "./components/main/home/HomeSection";
import AboutSection from "./components/main/about/AboutSection";
import ServicesComponent from "./components/services/ServicesComponent";
import SkillsComponent from "./components/main/skills/SkillsComponent";
import PortfolioSection from "./components/main/portfolio/PortfolioSection";

const App = () => {
    return (
        <div>
          <Header/>
             <HomeSection/>
            <AboutSection/>
            <ServicesComponent/>
            <SkillsComponent/>
            <PortfolioSection/>
        </div>
    );
};

export default App;
