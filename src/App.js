import React, { useContext } from 'react';
import Header from './components/header/Header';
import ContactSection from './pages/contacts/ContactSection';
import useScreenSIze from './hooks/useScreenSIze';
import BurgerMenu from './components/header/burgerMenu/BurgerMenu';
import DevelopedBy from './components/texts/DevelopedBy';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import EducationPage from './pages/education/EducationPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './useThemes';

const App = () => {
  const isMobile = useScreenSIze();
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme.theme}>
      {isMobile ? <BurgerMenu /> : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <DevelopedBy />
    </ThemeProvider>
  );
};

export default App;
