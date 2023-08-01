import React from 'react';
import './index.css';
import { Avatar } from '../../assets/image';
const AvatarComponent = ({ styles, src = Avatar }) => {
  return (
    <div className="home-avatar">
      <div
        className="avatar-wrap"
        style={
          styles
            ? { width: styles.width, height: styles.height }
            : { width: '30vw', height: '30vw' }
        }
      >
        <img className="avatar" src={src} alt="Shcherbina's photo" />
      </div>
    </div>
  );
};

export default AvatarComponent;
