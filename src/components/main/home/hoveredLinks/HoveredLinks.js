import React from 'react';
import {GitHubSvg, GMailSvg, LinkedInSvg, TelegramSvg} from "../../../../assets/image";
import Link from "./Link";

const socialMediaData = [
    {
        svg: isHovered => <TelegramSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
    },
    {
        svg: isHovered => <LinkedInSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
    },
    {
        svg: isHovered => <GitHubSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
    },
    {
        svg: isHovered => <GMailSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
    }
]
const HoveredLinks = () => {
    return (
        <div className="home-sci">
            {socialMediaData.map(el => (
                <Link el={el}/>
            ))}
        </div>
    );
};

export default HoveredLinks;
