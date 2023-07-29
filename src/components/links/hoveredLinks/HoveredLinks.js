import React from 'react';
import {
  GitHubSvg,
  GMailSvg,
  LinkedInSvg,
  TelegramSvg,
} from '../../../assets/image';
import Link from './Link';

const socialMediaData = [
  {
    svg: (isHovered) => (
      <TelegramSvg color={isHovered ? '#091b2a' : '#00eeff'} />
    ),
    href: 'https://t.me/evserbina',
    id: 1,
  },
  {
    svg: (isHovered) => (
      <LinkedInSvg color={isHovered ? '#091b2a' : '#00eeff'} />
    ),
    href: 'https://www.linkedin.com/in/yevheniia-shcherbina-628517259/',
    id: 2,
  },
  {
    svg: (isHovered) => <GitHubSvg color={isHovered ? '#091b2a' : '#00eeff'} />,
    href: 'https://github.com/eserbina652',
    id: 3,
  },
  {
    svg: (isHovered) => <GMailSvg color={isHovered ? '#091b2a' : '#00eeff'} />,
    href: 'https://eserbina652@gmail.com',
    id: 4,
  },
];
const HoveredLinks = () => {
  return (
    <div className="home-sci">
      {socialMediaData.map((el) => (
        <Link el={el} key={el.id} href={el.href} />
      ))}
    </div>
  );
};

export default HoveredLinks;
