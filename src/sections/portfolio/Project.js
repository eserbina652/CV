import React from 'react';
import './index.css';
import { GoToSvg } from '../../assets/image/svg';
const Project = ({
  img,
  title,
  description,
  website,
  gitHub,
  technology,
  commercial,
}) => {
  const isCommercial = () => {
    return commercial ? (
      <div className="layer-text-box">
        <p>{gitHub}</p>
      </div>
    ) : (
      <div className="layer-links-box">
        <p>Go to the gitHub</p>
        <a target="_blank" href={gitHub} rel="noreferrer">
          <GoToSvg />
        </a>
      </div>
    );
  };

  return (
    <div className="row">
      <img src={img} alt="latest project" />
      <div className="layer" style={{ color: 'white' }}>
        <h5>{title}</h5>
        <p>{description}</p>
        <p className="technologies">
          Technologies used: <span>{technology}</span>
        </p>
        <div className="layer-links-box-wrap">
          <div className="layer-links-box">
            <p>Go to the website</p>
            <a target="_blank" href={website} rel="noreferrer">
              <GoToSvg />
            </a>
          </div>
          {isCommercial()}
        </div>
      </div>
    </div>
  );
};

export default Project;
