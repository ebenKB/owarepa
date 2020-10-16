import React from 'react';
import styles from '../styles/error.module.css';

const Error = ({ error }) => {
  return (
    <div className={styles.error_wrapper}>
      {error}
    </div>
  )
}

export default Error
