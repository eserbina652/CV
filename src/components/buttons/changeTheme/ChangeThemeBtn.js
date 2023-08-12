import React, { useContext } from 'react';
import { DarkSvg, LightSvg } from '../../../assets/image/svg';
import { ThemeContext } from '../../../useThemes';
import './index.css';

const ChangeThemeBtn = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="theme-btn" onClick={themeContext.handleChangeTheme}>
      {themeContext.currentTheme ? <LightSvg /> : <DarkSvg />}
    </div>
  );
};

export default ChangeThemeBtn;
