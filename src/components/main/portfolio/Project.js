import React from 'react';
import './index.css'
import {GoToSvg} from "../../../assets/image";
const Project = ({img, title, description}) => {
    return (
        <div className="row">
            <img src={img} alt="latest project"/>
            <div className="layer">
                <h5>{title}</h5>
                <p>{description}</p>
                <a href='#'><GoToSvg/></a>
            </div>
        </div>
    );
};

export default Project;
