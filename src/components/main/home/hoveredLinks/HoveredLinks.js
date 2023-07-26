import React from 'react';
import {GitHubSvg, GMailSvg, LinkedInSvg, TelegramSvg} from "../../../../assets/image";
import Link from "./Link";

const socialMediaData = [
    {
        svg: isHovered => <TelegramSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
        id: 1,
    },
    {
        svg: isHovered => <LinkedInSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
        id: 2,
    },
    {
        svg: isHovered => <GitHubSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
        id: 3,
    },
    {
        svg: isHovered => <GMailSvg color={isHovered ? '#091b2a' : '#00eeff'}/>,
        href: '#',
        id: 4,
    }
]
const HoveredLinks = () => {
    return (
        <div className="home-sci">
            {socialMediaData.map(el => (
                <Link el={el} key={el.id}/>
            ))}
        </div>
    );
};

export default HoveredLinks;
