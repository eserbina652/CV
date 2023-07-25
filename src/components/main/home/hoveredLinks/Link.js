import React, {useState} from 'react';

const Link = ({el}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (bool) => {
        setIsHovered(bool)
    }
    return (
        <a href="#" onMouseEnter={() => handleHover(true)}
           onMouseLeave={() => handleHover(false)}
        >
            {el.svg(isHovered)}
        </a>
    );
};

export default Link;
