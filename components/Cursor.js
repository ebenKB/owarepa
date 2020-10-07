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
    const mouse = {
      x: mouseX(event),
      y:  mouseY(event),
    }

    if (follower.current) {
      follower.current.style.top = (mouse.y) + 'px'
      follower.current.style.left = (mouse.x) + 'px'
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
    <div ref={follower} id="follower" className={styles.follower}>
      <div ref={circle_1} id="cirlce_1" className={styles.circle_1}></div>
      <div ref={circle_2} id="circle_2" className={styles.circle_2}></div>
    </div>
  )
}

export default Cursor
