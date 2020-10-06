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
import { useTrail, animated, useTransition } from 'react-spring';

export default function Home() {
  const [bodyPosistion, setBodyPosition] = useState('default')
  useEffect(() => {setToggle(!toggle)}, [])

  const transitions = useTransition(['OWAREPA'], item => item, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });

  const [toggle, setToggle] = useState(false);
  const items = ['OWAREPA'];
  const config = { mass: 5, tension: 2000, friction: 1800 }
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 200 : 190,
    from: { opacity: 0, x: 180, height: 0 },
  })

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
            { trail.map(({ x, height, ...rest }, index) => (
              <div className={styles.hero_content}>
                <animated.div className={styles.hero_text}
                  key={index}
                  className=""
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
                >
                  <animated.div style={{ height }}>
                    <h1>{items[index]}</h1>
                    <p className={`${styles.hero_content_caption} animate__animated animate__bounceIn`}>
                    the most popular of the strategy games belonging to the Mancala family of board games.
                  </p>
                  </animated.div>
                  {/* <h1>OWAREPA</h1> */}
                </animated.div>
                { transitions.map(({ item, props, key }) => {
                  <animated.div key={key} style={props}> {item}</animated.div>
                })}
              </div>
            )) }
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
