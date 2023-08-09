import React from 'react';
import './index.css';
import { GoToSvg } from '../../../assets/image/svg';
import { useTranslation } from 'react-i18next';
const Project = ({
  img,
  title,
  description,
  website,
  gitHub,
  technology,
  commercial,
}) => {
  const { t } = useTranslation();
  const isCommercial = () => {
    return commercial ? (
      <div className="layer-text-box">
        <p>{t(gitHub)}</p>
      </div>
    ) : (
      <div className="layer-links-box">
        <p>{t('goToGit')}</p>
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
        <h5>{t(title)}</h5>
        <p>{t(description)}</p>
        <p className="technologies">
          {t('technologyUse')} <span>{t(technology)}</span>
        </p>
        <div className="layer-links-box-wrap">
          <div className="layer-links-box">
            <p>{t('goToWebsite')}</p>
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
