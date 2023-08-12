import React from 'react';

const SkillsBar = ({ skill, svgComponent }) => {
  return (
    <li>
      {svgComponent} {skill}
    </li>
  );
};

export default SkillsBar;
