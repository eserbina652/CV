import React from 'react';
import './index.css'
import {Avatar} from "../../../assets/image";
import HoveredLinks from "./hoveredLinks/HoveredLinks";
const HomeSection = () => {
    return (
        <section className='home'>
            <div className='home-content'>
                {/*<div className='home-description'>*/}
                    <h3>Hello, It's Me</h3>
                    <h1>Yevheniia Shcherbina</h1>
                    <h3>And I'm a React Developer</h3>
                    <p>I'm a React/ReactNative Developer with a little commercial experience
                        <br/>Component layout, works with someone's code, debugging, transition old projects to the new syntax, work with saving Data,
                        creating websites by your backend and also for further integration with the backend</p>
                {/*</div>*/}
                <div className="home-avatar">
                    <div className='avatar-wrap'>
                        <img className='avatar' src={Avatar} alt="Shcherbina's photo"/>
                    </div>
                </div>
                <HoveredLinks/>
                <a href='#' className='btn-box'>More About Me</a>
            </div>
        </section>
    );
};

export default HomeSection;
