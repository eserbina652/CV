import { createContext, useEffect, useState } from 'react';

export let isLight = true;

const lightColors = {
  bg: {
    sectionsBg: '#c6c6c6',
    headerBg: 'rgb(113,113,113)',
    accent: '#e2e2e2',
  },
  fonts: {
    primary: '#1c1c1c',
  },
};

const darkColors = {
  bg: {
    sectionsBg: '#383838',
    headerBg: 'rgb(85,85,85)',
    accent: '#555555',
  },
  fonts: {
    primary: '#e2e2e2',
  },
};

export const ThemeContext = createContext(null);
export const CustomThemeProvider = ({ children }) => {
  const initialTheme = JSON.parse(localStorage.getItem('theme'));
  const [currentTheme, setCurrentTheme] = useState(
    initialTheme !== null ? initialTheme : isLight
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const theme = {
    colors: currentTheme ? lightColors : darkColors,
  };

  const handleChangeTheme = () => {
    setCurrentTheme(!currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
