import {useState, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Main.module.css'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Controller, Scene } from 'react-scrollmagic';
import { appContext } from '../context/app.context';
import Features from '../components/Features';
import DownloadSection from '../components/DownloadSection';
import BenefitsSection from '../components/BenefitsSection';
import ScrollOut  from "scroll-out";
import AppHeadMeta from '../components/AppHeadMeta';

export default function Home() {
  const [bodyPosistion, setBodyPosition] = useState('default')
  useEffect(() => {
    ScrollOut({
      threshold: 0.5,
      onShown: function(el) {
        // remove the class
        el.classList.remove("animate__animated");
        el.classList.remove("animate__slideInDown");
  
        // force reflow
        void el.offsetWidth;
  
        // re-add the animated cl
        el.classList.add("animate__animated");
        el.classList.add("animate__slideInDown");
      },
    });
    return () => null;
  }, [])

  return (
    <appContext.Provider value={{position : bodyPosistion}}>
      <div className={styles.container}>
        <AppHeadMeta />
        <Navigation setBodyPosition={(val) => setBodyPosition(val)}/>
        <main>
          <section className={styles.hero}>
            <div className={styles.hero_overlay} />
          </section>
          <section className={`${styles.main} ${styles.main} ${bodyPosistion === 'fixed' ? styles.main_fixed : styles.main_default}`}>
            <div className={styles.hero_content}>
              <div className={styles.hero_text}>
                <h1>OWAREPA</h1>
                <p className={`${styles.hero_content_caption} animate__animated animate__bounceIn`}>
                  the most popular of the strategy games belonging to the Mancala family of board games.
                </p>
              </div>
            </div>
            <div className={styles.main__content}>
              <Features />
              <BenefitsSection />
              <DownloadSection />
            </div>
            <Footer />
          </section>
        </main>
      </div>
    </appContext.Provider>
  )
}
