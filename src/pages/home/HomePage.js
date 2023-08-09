import React from 'react';
import HomeSection from './home/HomeSection';
import AboutSection from './about/AboutSection';
import TopBtn from '../../components/buttons/goToTop/TopBtn';

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <TopBtn />
    </div>
  );
};

export default HomePage;
