import React, { useContext } from 'react';
import Header from './components/header/Header';
import useScreenSIze from './hooks/useScreenSIze';
import BurgerMenu from './components/header/burgerMenu/BurgerMenu';
import DevelopedBy from './components/texts/DevelopedBy';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './useThemes';
import { routesData } from './API/data';

const App = () => {
  const isMobile = useScreenSIze();
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme.theme}>
      {isMobile ? <BurgerMenu /> : <Header />}
      <Routes>
        {routesData.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Routes>
      <DevelopedBy />
    </ThemeProvider>
  );
};

export default App;
