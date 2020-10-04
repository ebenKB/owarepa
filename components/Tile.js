import React from 'react';
import styles from '../styles/tile.module.css'

const Tile = ({children}) => {
  return (
    <div className={styles.tile}>
      {children}
    </div>
  )
}

export default Tile
