import React from 'react';
import AvatarComponent from "../../avatar/AvatarComponent";
import './index.css'
const AboutSection = () => {
    return (
        <section className='about' id='about'>
            <div className="about-img">
                <AvatarComponent styles={
                    {width: '100%', height: '100%'}
                }/>
            </div>
            <div className="about-text">
                <h2>About<span>Me</span></h2>
                <h4>React Developer</h4>
                <p>As an aspiring React developer,
                    I have some experience with one commercial project and a strong passion
                    for continuous learning. I am currently seeking new career opportunities
                    to further grow and excel in the tech industry.
                    My adaptability and enthusiasm make me a valuable asset for any company
                    looking for a motivated professional to take on exciting projects.</p>
                <a href='#' className='btn-box'>More About Me</a>
            </div>
        </section>
    );
};

export default AboutSection;
