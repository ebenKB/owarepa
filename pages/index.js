import {useState, useEffect, useContext} from 'react';
import styles from '../styles/Main.module.css'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { AppContext } from '../context/app.context';
import Features from '../components/Features';
import DownloadSection from '../components/DownloadSection';
import BenefitsSection from '../components/BenefitsSection';
import ScrollOut  from "scroll-out";
import AppHeadMeta from '../components/AppHeadMeta';
import { useTrail, animated, useTransition } from 'react-spring';
import Cursor from '../components/Cursor';
import Layout from '../components/Layout';
import Link from 'next/link';
import Transition from '../components/TransitionGroup';
import useMedia from '../components/UseMedia';

export default function Home() {
  const { data, setAppState } = useContext(AppContext)
  const media = useMedia();
  
  useEffect(() => {
    setToggle(!toggle);
    setAppState(({
      ...data,
      position: 'default',
      navType: 'transparent',
    }));
  }, [media]);

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
    x: toggle ? 20 : 190,
    from: { opacity: 0, x: 0, height: 0 },
  })

  useEffect(() => {
    ScrollOut({
      threshold: 0.5,
      onShown: function(el) {
        // remove the class
        el.classList.remove("animate__animated");
        el.classList.remove("animate__slideInLeft");
  
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
    <div className={styles.container}>
      {media.x >= 600 && <Cursor />}
      <AppHeadMeta />
      <Navigation />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero_overlay} />
        </section>
        <Layout>
          <section className={`${styles.main}`}>
            <div className={styles.hero_content}>
                <div className={styles.hero_text}>
                  <div>
                    {/* { trail.map(({ x, height, ...rest }, index) => (
                      <animated.div
                        key={index}
                        className=""
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
                      >
                        <animated.div style={height}>
                          <h1>{items[index]}</h1>
                        </animated.div>
                      </animated.div>
                    ))} */}
                    <Transition />
                    <p className={`${styles.hero_content_caption} animate__animated animate__fadeIn content_text`}>
                      the most popular of the strategy games belonging to the Mancala family of board games.
                    </p>
                    <div className="pt-20 content_text">
                      <Link href="https://play.google.com/store/apps/details?id=com.jeviasolutions.OwarePa" passRefs>
                        <a className={`${styles.download_btn} inline-flex items-center`} target="_blank">
                          <span>
                            <img src="./frd-arrow.svg" alt="" className={`${styles.download_img} mr-4`}/>
                          </span>
                          <span>Download Game Now</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className={styles.main__content}>
              <Features />
              <BenefitsSection />
              <DownloadSection />
            </div>
            <Footer />
          </section>
        </Layout>
      </main>
    </div>
  )
}
