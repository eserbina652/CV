import React from 'react';
import './index.css';
import { Avatar } from '../../assets/image/svg';
import { AvatarWrap } from './index';

const AvatarComponent = ({ styles, src = Avatar }) => {
  return (
    <AvatarWrap>
      <div
        className="avatar-wrap"
        style={
          styles
            ? { width: styles.width, height: styles.height }
            : { width: '30vw', height: '30vw' }
        }
      >
        <img className="avatar" src={src} alt="Shcherbina's avatar" />
      </div>
    </AvatarWrap>
  );
};

export default AvatarComponent;
