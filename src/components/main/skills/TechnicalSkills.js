import React from 'react';
import SkillsBar from "./SkillsBar";
import {SkillsHTMLSvg} from "../../../assets/image";
import './index.css'

const skillsData = [
    {
        skill: 'HTML',
        additionalClass: 'html',
        svgComponent: <SkillsHTMLSvg/>
    },
    {
        skill: 'HTML',
        additionalClass: 'html',
        svgComponent: <SkillsHTMLSvg/>
    },
    {
        skill: 'HTML',
        additionalClass: 'html',
        svgComponent: <SkillsHTMLSvg/>
    },
    {
        skill: 'HTML',
        additionalClass: 'html',
        svgComponent: <SkillsHTMLSvg/>
    },
    {
        skill: 'HTML',
        additionalClass: 'html',
        svgComponent: <SkillsHTMLSvg/>
    },
]
const TechnicalSkills = () => {
    return (
        <div className="container" id='Skills'>
            <h1 className='heading1'>
                Technical TechnicalSkills
            </h1>
            <div className="Technical-bars">
                {skillsData.map(skillEl => (
                    <SkillsBar svgComponent={skillEl.svgComponent}
                               additionalClass={skillEl.additionalClass}
                               skill={skillEl.skill}
                    />
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
