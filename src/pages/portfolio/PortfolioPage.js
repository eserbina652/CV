import React from 'react';
import PortfolioSection from './portfolio/PortfolioSection';
import TopBtn from '../../components/buttons/goToTop/TopBtn';
import useScreenSIze from '../../hooks/useScreenSIze';
const PortfolioPage = () => {
  const isMobile = useScreenSIze();
  return (
    <div>
      <PortfolioSection />
      {isMobile && <TopBtn />}
    </div>
  );
};

export default PortfolioPage;
