import React from 'react';
import './index.css';
import useScreenSIze from '../../hooks/useScreenSIze';

const RadialBar = ({ presents, text, id, isSkills = true }) => {
  // const isMobile = useScreenSIze();
  // // const langStyles = isMobile
  // //   ? { minWidth: '80%', maxWidth: '80%', alignItems: 'center' }
  // //   : {
  // //       width: 'auto',
  // //       flexDirection: 'column-reverse',
  // //       alignItems: 'flex-start',
  // //     };
  return (
    <div className="radial-bars" style={{ width: '100%' }}>
      <svg className="radial-bar-svg" x="0px" y="0px" viewBox="0 0 200 200">
        <circle
          className="progress-bar"
          cx="100"
          cy="100"
          r="80"
          fill="none"
          strokeWidth="20" // Толщина круга
        ></circle>
        <circle className={`path path-${id}`} cx="100" cy="100" r="80"></circle>
        <text
          x="50%" // Положение текста по горизонтали в центре
          y="50%" // Положение текста по вертикали в центре
          textAnchor="middle" // Центрирование текста относительно точки (x, y)
          dy="0.3em" // Смещение текста по вертикали для лучшего выравнивания
          fill="white" // Цвет текста
          fontSize="20" // Размер шрифта текста
        >
          {presents}
        </text>
      </svg>
      <div className={isSkills ? 'text' : 'text1'}>{text}</div>
    </div>
  );
};

export default RadialBar;
