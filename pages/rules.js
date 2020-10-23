import React, { useContext, useEffect } from 'react';
import Play from '../components/HowToPlay'
import AppHeadMeta from '../components/AppHeadMeta';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import { AppContext } from '../context/app.context';
import useMedia from '../components/UseMedia';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import DownloadSection from '../components/DownloadSection';
import styles from '../styles/rules.module.css';
import ItemListWrapper from '../components/ItemListWrapper';

const rules = () => {
  const { data, setAppState } = useContext(AppContext)
  const media = useMedia();

  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
      navType: (media && media.x >= 600 ? 'transparent' : 'opaque'),
    }))
  }, [media]);

  return (
    <div>
      {media.x >= 600 && <Cursor />}
      <AppHeadMeta />
      <Navigation />
      <Layout>
        <section className={`capitalize text-center ${styles.rules_hero}`}>
        <div className={styles.rules_bg} />
        <div className={styles.rules_overlay} />
          <div className="w-full">
            <h1 className="text-5xl">The Rules are fairly simple and straight forward</h1>
          </div>
        </section>
          <section className={styles.rulesContent}>
            <h1 className="big-caption mb-10 pure-caption">
              <div data-scroll>4 RULES OF OWARE</div>
            </h1>
            <div className="faint-caption sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 sm:text-base md:text-2xl lg:text-2xl xl:text-2xl content_text">
              <p className="sm:text-base md:text-2xl lg:text-2xl xl:text-2xl sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 text-justify pb-10">
                The objective of Oware game is to capture more seeds than your opponent. 
                In the case of the Nam-nam, your objective is to capture all 48 seeds. 
                But with Abapa, one wins by capturing at least 25 seeds on the board.
              </p>
              <div className={`sm:text-justify ${styles.game_rules}`}>
                <ItemListWrapper>
                  <li>Players play in turns.</li>
                  <li>It is mandatory for each player to make a move.</li>
                  <li>
                    When a move is being made, all seeds in a hole are taken and 
                    distributed one by one in anti-clockwise direction.
                  </li>
                  <li>
                    A move that eventually leaves your opponent with no seed to play with is forbidden.
                    <p>For Abapa, there exist the potential for the game to end in stalemate.</p>
                  </li>
                </ItemListWrapper>
              </div>
            </div>
          </section>
        <Play.Namnam />
        <Play.Abapa />
        <DownloadSection />
        <Footer />
      </Layout>
    </div>
  )
}

export default rules
