import React from 'react';
import './index.css'
const SkillsBar = ({skill, additionalClass, svgComponent}) => {
    return (
        <div className="bar">
            {svgComponent}
            <div className="info">
                <span>{skill}</span>
            </div>
            <div className={`progress-line ${additionalClass}`}>
                <span></span>
            </div>
        </div>
    );
};

export default SkillsBar;
