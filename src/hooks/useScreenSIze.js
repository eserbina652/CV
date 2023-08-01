import { useEffect, useState } from 'react';

let useScreenSIze = () => {};

if (!process.env.STAGING) {
  useScreenSIze = () => {
    const [width, setWidth] = useState(window?.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window?.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
    return width <= 768;
  };
} else {
  useScreenSIze = () => {
    return false;
  };
}

export default useScreenSIze;
