import React from 'react';
import './index.css'
import {Avatar} from "../../assets/image";
const AvatarComponent = ({styles}) => {
    return (
        <div className="home-avatar">
            <div className='avatar-wrap' style={
                styles?
                    {width: styles.width, height: styles.height}
                    :
                    {width: '300px', height: '300px'}
            }>
                <img className='avatar' src={`${Avatar}`} alt="Shcherbina's photo"/>
            </div>
        </div>
    );
};

export default AvatarComponent;
