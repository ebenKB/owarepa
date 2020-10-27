import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styles from '../styles/transition.module.css'

const Transition = () => {
  const [items, setItems] = useState([]);
  const [text] = useState("OWAREPA")
  const transitions = useTransition(items, items => items.key, {
    initial: { transform: 'translate3d(0, -10px, 10px)' },
    from: { transform: 'translate3d(30px, -200px, 180px)', opacity: 0,},
    enter: { transform: 'translate3d(0, 0, 0)', opacity: 1},
    leave: { transform: 'translate3d(0, 0, 0)', opacity: 0},

  })

  useEffect(() => {
    // setItems(() => [])
    let t = 200;
    let i =0;
    let interval=null;
    if (i < text.length) {
       interval = setInterval(() => {
        setItems((items) => [...items, {key: Math.random(), text: text[i]}]);
        i++;
      }, t)
    } else { clearInterval(interval); }

    return () => {clearInterval(interval)}
  }, [])
  return (
    <div>
      {
        transitions.map(({ item, props, key }) =>
        <div className={styles.transitions} key={key}>
          <animated.div key={key} style={props} className={styles.transitions}>
            <h1>{item.text}</h1>
          </animated.div>
        </div>
        )
      }
    </div>
  )
}

export default Transition
