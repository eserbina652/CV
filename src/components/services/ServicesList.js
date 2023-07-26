import React from 'react';
import './index.css'
const ServicesList = ({svgComponent, title, description, href}) => {
    return (
            <div>
                {svgComponent}
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={href} className='read'>learn more</a>
            </div>
    );
};

export default ServicesList;
