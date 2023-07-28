import React from 'react';
import './index.css'
const Navbar = () => {
    return (
        // разобраться с переходами
        <nav className='navbar'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Skill</a>
            <a href='#skills'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </nav>
    );
};

export default Navbar;
