import React from 'react';
import './index.css'
import HoveredLinks from "./hoveredLinks/HoveredLinks";
import AvatarComponent from "../../avatar/AvatarComponent";
const HomeSection = () => {
    return (
        <section className='home'>
            <div className='home-content'>
                <div className='home-description'>
                    <h3>Hello, It's Me</h3>
                    <h1>Yevheniia Shcherbina</h1>
                    <h3>And I'm a React Developer</h3>
                    {/*Подумать над подключением динамического изменения текста*/}
                    <p>I'm a React/ReactNative Developer with a little commercial experience
                        <br/>Component layout, works with someone's code, debugging, transition old projects to the new syntax, work with saving Data,
                        creating websites by your backend and also for further integration with the backend</p>
                    <HoveredLinks/>
                    <a href='#' className='btn-box'>More About Me</a>
                </div>
                <AvatarComponent/>
            </div>
        </section>
    );
};

export default HomeSection;
