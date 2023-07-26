import React from 'react';
import './index.css'
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSkills from "./ProfessionalSkills";

const SkillsComponent = () => {
    return (
        <>
            <h1 className='sub-title'>My <span>TechnicalSkills</span></h1>
            <section>
                <TechnicalSkills/>
                <ProfessionalSkills/>
            </section>
        </>

    );
};

export default SkillsComponent;
