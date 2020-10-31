import React, { useEffect, useState } from 'react';

const UseMedia = () => {
  // x is the width and y is the height
  const [media , setMedia] = useState({ x: null, y: null });

  const handleResize = () => {
    if (window !== undefined) {
      setMedia({
        x: window.innerWidth,
        y: window.innerHeight,
    });
  }}

  // set the dimensions when the component mounts
  useEffect(() => {
    if (window !== undefined) {
      setMedia({
        x: window.innerWidth,
        y: window.innerHeight,
      })
    }
  }, [])

 // set the dimensions when the component resizes
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize)}
  }, []);
  return media;
}

export default UseMedia;
