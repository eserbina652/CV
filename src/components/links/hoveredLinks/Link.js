import React, { useState } from 'react';

const Link = ({ el, href = '#' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (bool) => {
    setIsHovered(bool);
  };
  return (
    <a
      target="_blank"
      href={href}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      rel="noreferrer"
    >
      {el.svg(isHovered)}
    </a>
  );
};

export default Link;
