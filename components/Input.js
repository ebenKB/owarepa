import React from 'react';
import styles from '../styles/input.module.css';

const Input = React.forwardRef(({...rest}, ref) => (
  <input className={`content_text ${styles.custom_input}`} { ...rest }  ref={ref} />
))

export default Input
