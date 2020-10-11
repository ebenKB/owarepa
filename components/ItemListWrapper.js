import React from 'react';
import styles from '../styles/ItemListWrapper.module.css';

const ItemListWrapper = ({ children }) => {
  return (
    <div className={styles.itemListWrapperContent}>
      <ul className={styles.itemListWrapper}>
        {children}
      </ul>
    </div>
  )
}

export default ItemListWrapper


