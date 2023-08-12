import React from 'react';
import './index.css';

const SkillsBar = ({ skill, svgComponent }) => {
  return (
    <li>
      {svgComponent} {skill}
    </li>
  );
};

export default SkillsBar;
