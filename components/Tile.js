import React from 'react';
import styles from '../styles/tile.module.css'

const Tile = ({children, classes=""}) => {
  return (
    <div className={`${styles.tile} ${classes}`}>
      {children}
    </div>
  )
}

export default Tile
