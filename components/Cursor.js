import React, { useEffect } from 'react';
import styles from '../styles/cursor.module.css';

const Cursor = () => {
  const follower = React.createRef();
  const circle_1 = React.createRef();
  const circle_2 = React.createRef();

  const mouseX = (event) => {
    return event.clientX;
  }

  const mouseY = (event) => {
    return event.clientY;
  }

  const positionElement = (event) => {
    console.log(event.pageY)
    const mouse = {
      x: mouseX(event),
      y:  mouseY(event),
    }

    if (follower.current) {
      follower.current.style.top = (mouse.y - 10) + 'px'
      follower.current.style.left = (mouse.x - 10) + 'px'
    }
  }

  const setCursoPos = (event) => {
    let timer = false;
    const _event = event;
    timer = setTimeout((positionElement(_event)), 1)
  }

  useEffect(() => {
    window.addEventListener('mousemove', setCursoPos)
    return () => window.removeEventListener('mousemouse', setCursoPos)
  })

  return (
    <div ref={follower} id="follower" className={styles.follower}></div>
  )
}

export default Cursor
