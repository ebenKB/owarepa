import React from 'react';
import styles from '../styles/input.module.css';

const Input = ({ ...rest }) => {
  return (
    <input className={`content_text ${styles.custom_input}`} { ...rest } />
  )
}

export default Input
