import React, { useContext } from 'react'
import { AppContext } from '../context/app.context';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  const { data, setAppState } = useContext(AppContext)
  
  return (
    <div className={`${data.position === 'fixed' ? styles.main_fixed : styles.main_default}`}>
      {children}
    </div>
  )
}

export default Layout
