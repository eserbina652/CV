import React from 'react';
import './index.css';
const SkillsBar = ({ skill, svgComponent }) => {
  return (
    <div className="bar">
      {svgComponent}
      <span>{skill}</span>
    </div>
  );
};

export default SkillsBar;
