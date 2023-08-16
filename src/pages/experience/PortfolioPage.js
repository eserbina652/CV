import React from 'react';
import PortfolioSection from './portfolio/PortfolioSection';
import TopBtn from '../../components/buttons/goToTop/TopBtn';
import PreviousWorks from './workExp/PreviousWorks';
const PortfolioPage = () => {
  return (
    <div>
      <PreviousWorks />
      <PortfolioSection />
      <TopBtn />
    </div>
  );
};

export default PortfolioPage;
