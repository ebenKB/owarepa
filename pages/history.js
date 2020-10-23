import React, { useContext, useEffect } from 'react'
import Navigation from '../components/Navigation';
import styles from '../styles/history.module.css'
import Footer from '../components/Footer';
import NavLinks from '../components/NavLinks';
import DownloadSection from '../components/DownloadSection';
import AppHeadMeta from '../components/AppHeadMeta';
import ScrollOut  from "scroll-out";
import Layout from '../components/Layout';
import { AppContext } from '../context/app.context';
import useMedia from '../components/UseMedia';
import ItemListWrapper from '../components/ItemListWrapper';
import Cursor from '../components/Cursor';
import HistoryCarousel from '../components/HistoryCarousel';


const About = () => {
  const { data, setAppState } = useContext(AppContext)
  const media = useMedia();

  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
      navType: (media && media.x >= 600 ? 'transparent' : 'opaque'),
    }))
  }, [media]);

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
    <div>
      {media.x >= 600 && <Cursor />}
      <AppHeadMeta />
      <Navigation />
      <Layout>
      <div className={styles.aboutWrapper}>
          <HistoryCarousel>
            <picture className={styles.aboutWrapper}>
              <source srcSet="/oware-small.jpg" media="(max-width: 600px)"/>
              <img src="/oware-history.png" alt="" className={styles.aboutWrapper}/>
              <div className={styles.aboutOverlay}>
              </div>
            </picture>
            <picture className={styles.aboutWrapper}>
              <source srcSet="/oware-small.jpg" media="(max-width: 600px)"/>
              <img src="/board2.png" alt="" className={styles.aboutWrapper}/>
              <div className={styles.aboutOverlay}></div>
            </picture>
            <picture className={styles.aboutWrapper}>
              <source srcSet="/oware-small.jpg" media="(max-width: 600px)"/>
              <img src="/oware-views.png" alt="" className={styles.aboutWrapper}/>
              <div className={styles.aboutOverlay}></div>
            </picture>
          </HistoryCarousel>
          <div className={styles.aboutOverlay}></div>
          <section className={styles.aboutContent}>
            <h1 className="big-caption mb-10 pure-caption">
              <div data-scroll>HISTORY OF OWARE</div>
            </h1>

            <div className="flex flex-wrap content_text">
              <div className="faint-caption flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full mr-10">
                  <div className="sm:w-full md:w-11/12 lg:11/12 xl:11/12 text-justify">
                    <p className="faint-caption sm:text-base md:text-2xl lg:text-2xl xl:text-2xl mb-5 sm:w-full md:w-4/5 lg:w-4/5 xl:w-11/12 content_text text-justify">
                      Oware (<em>also known as Wari or Awale</em>) is the most popular of the strategy 
                      games belonging to the Mancala family of board games.
                    </p>
                    <p className="pb-5 sm:text-base md:text-2xl lg:text-2xl xl:text-2xl sm:w-full md:w-4/5 lg:w-4/5 xl:w-11/12">
                      Oware is one of the oldest games played today. 
                      This game is far from a game of chance. Instead, 
                      it is a strategic game that requires prudence and clever moves 
                      from both players.
                    </p>
                    <p className="mb-5 sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
                      Oware is very popular in West Africa, 
                      the Caribbean, Middle East and Asia. Oware belongs to the mancala family of games, 
                      but still remains the most popular variant of this family of board games. 
                      The game is believed to have originated with the Ashantis in Ghana.
                    </p>
                  </div>
              </div>
              <div className="faint-caption flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full mr-10">
                <div className="sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12  text-justify">
                  <p className="mb-5 sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
                    Oware is a game the unifies people, 
                    both players and spectators alike. The name “oware” is an 
                    Akan word meaning “he marries” or “she marries.” 
                    History has it that an Ashanti man and woman used to play this game together, 
                    and they loved to keep playing together so much that they got married in 
                    order to get more time to play. 
                  </p>
                  <p className="sm:text-base md:text-2xl lg:text-2xl xl:text-2xl md:w-4/5 lg:w-4/5 xl:w-4/5 text-justify">
                    No wonder today when couples play this game 
                    together their friendship improves. There is only one app on Play Store that 
                    can let you enjoy the oware game to the fullest extent possible. 
                    It is called OwarePa. Simply download and play.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <section className={styles.rulesContent}>
            <h1 className="big-caption mb-10 pure-caption">
              <div data-scroll>RULES OF OWARE</div>
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
          </section> */}
          <DownloadSection />
        <Footer />
      </div>
      </Layout>
    </div>
  )
}

export default About
