import React from 'react';
import './index.css'
import Navbar from "./navBar/Navbar";
const Header = () => {
    return (
        <header className='header'>
            <a href='#' className='logo'>Portfolio</a>
            <Navbar/>
        </header>
    );
};

export default Header;