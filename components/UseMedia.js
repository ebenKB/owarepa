import React, { useEffect, useState } from 'react';

const UseMedia = () => {
  const [media , setMedia] = useState({ x: null, y: null });

  const handleResize = () => {
    if (window !== undefined) {
      setMedia({
        x: window.innerWidth,
        y: window.innerHeight,
    });
  }}

  useEffect(() => {
    if (window !== undefined) {
      setMedia({
        x: window.innerWidth,
        y: window.innerHeight,
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize)}
  }, []);
  return media;
}
export default UseMedia;

