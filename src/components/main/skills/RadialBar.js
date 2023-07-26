import React from 'react';
import './index.css'
const RadialBar = ({presents, text, id}) => {
    return (
        <div className="radial-bars">
            <svg x='0px' y='0px' viewBox='0 0 200 200'>
                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                <circle className={`path path-${id}`} cx='100' cy='100' r='80'></circle>
            </svg>
            <div className="percentage">{presents}</div>
            <div className="text">{text}</div>
        </div>
    );
};

export default RadialBar;
