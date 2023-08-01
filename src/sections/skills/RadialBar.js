import React from 'react';
import './index.css';

const RadialBar = ({ presents, text, id, isSkills = true }) => {
  return (
    <div
      className="radial-bars"
      style={
        isSkills
          ? { width: '100%' }
          : {
              width: 'auto',
              flexDirection: 'column-reverse',
              alignItems: 'flex-start',
            }
      }
    >
      <svg x="0px" y="0px" viewBox="0 0 200 200">
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
