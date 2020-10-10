import React, { useContext, useEffect } from 'react'
import Navigation from '../components/Navigation';
import styles from '../styles/about.module.css'
import Footer from '../components/Footer';
import NavLinks from '../components/NavLinks';
import DownloadSection from '../components/DownloadSection';
import AppHeadMeta from '../components/AppHeadMeta';
import ScrollOut  from "scroll-out";
import Layout from '../components/Layout';
import { AppContext } from '../context/app.context';

const About = () => {
  const { data, setAppState } = useContext(AppContext)
  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default'
    }))
  }, []);

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
    <AppHeadMeta />
      <Navigation />
      <Layout>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutOverlay}></div>
          <section className={styles.aboutContent}>
            <h1 className="text-5xl mb-10">
              <div data-scroll>HISTORY OF OWARE</div>
            </h1>
            <p className="w-11/12 mb-10 text-2xl content_text text-justify">
              Oware (<em>also known as Wari or Awale</em>) is the most popular of the strategy 
              games belonging to the Mancala family of board games.
            </p>
            <div className="flex flex-wrap content_text">
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full mr-10">
                  <div className="w-11/12 text-2xl text-justify">
                    Oware is one of the oldest games played today. 
                    This game is far from a game of chance. Instead, 
                    it is a strategic game that requires prudence and clever moves 
                    from both players. Oware is very popular in West Africa, 
                    the Caribbean, Middle East and Asia. Oware belongs to the mancala family of games, 
                    but still remains the most popular variant of this family of board games. 
                    The game is believed to have originated with the Ashantis in Ghana.
                  </div>
              </div>
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full mr-10">
                <div className="w-11/12 text-2xl text-justify">
                  Oware is a game the unifies people, 
                  both players and spectators alike. The name “oware” is an 
                  Akan word meaning “he marries” or “she marries.” 
                  History has it that an Ashanti man and woman used to play this game together, 
                  and they loved to keep playing together so much that they got married in 
                  order to get more time to play. No wonder today when couples play this game 
                  together their friendship improves. There is only one app on Play Store that 
                  can let you enjoy the oware game to the fullest extent possible. 
                  It is called OwarePa. Simply download and play.
                </div>
              </div>
            </div>
          </section>
          <section className={styles.rulesContent}>
            <h1 className="text-5xl mb-10">
              <div data-scroll>RULES OF OWARE</div>
            </h1>
            <div className="content_text text-2xl">
              <p className="text-2xl sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 text-justify pb-10">
                The objective of Oware game is to capture more seeds than your opponent. 
                In the case of the Nam-nam, your objective is to capture all 48 seeds. 
                But with Abapa, one wins by capturing at least 25 seeds on the board.
              </p>
              <div className={styles.game_rules}>
                <ul className="sm:text-justify">
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
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.namnamContent}>
            <h1 className="text-5xl mb-10">
              <div data-scroll>HOW TO PLAY OWARE NANAM</div>
            </h1>
            <div className="flex flex-wrap-reverse text-justify content_text text-2xl w-full">
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full">
                <p className="pb-10">
                  With the Nam-nam rule, seeds in one house are picked and distributed counter-clockwise. 
                  When the distribution ends in a non-empty house, 
                  the distribution resumes starting from that ending house. 
                  A player’s turn ends when the distribution ends in an empty house. 
                  Each player earns a score when a house in the player's territory sums up to four seeds, 
                  in which case the seeds are pick out from the board. 
                  The only exception is when the distribution ends in a house and the resulting seeds become 4, 
                  in that case the player who distributed the seeds earns them.
                </p>
                <p className="pb-10">
                  It is not allowed to deprive your opponent of seeds. 
                  Thus, when your opponent has no seeds, you are required to make a move that 
                  will distribute some to your opponent. When there remains only eight seeds on the board, 
                  the player who captures four seeds out of the eight takes the remaining four too.
                </p>
                <p className="pb-10">
                  A round of play ends when all seeds on the board are captured. 
                  With the next round of play, each player fills the houses on his side using 
                  the seeds earned at the end of the previous round, starting from the right-most house. 
                  The player with more seeds acquires extra house(s) previously belonging to the opponent.
                </p>
                <h3>The game ends when after a round of play, one player earns all 48 seeds.</h3>
              </div>
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full md:ml-20 lg:ml-20 xl:ml-20 w-full">
                <img src="/namnam.png" alt="" className="rounded-image"/>
              </div>
            </div>
          </section>
          <section className={styles.abapaContent}>
            <h1 className="text-5xl mb-10">
              <div data-scroll>HOW TO PLAY OWARE ABAPA</div>
            </h1>
            <div className="flex flex-wrap flex-wrap-reverse text-justify content_text text-2xl w-full">
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full">
                <p className="pb-10">
                  One plays by picking all seeds in any one of the houses in the player's 
                  territory and distributing them one by one in an anti-clockwise direction. 
                  When the last seed being distributed ends in an opponent’s 
                  house and that house results in 2 or 3 seeds, the player earns a 
                  score by picking those seeds. 
                </p>
                <p>
                  All previous consecutive house(s) of 2 or 3 
                  seeds in the opponent’s territory are also collected up. However, 
                  a score is not allowed if collecting the seeds will leave the opponent 
                  with no single seed in his territory to play with.
                </p>
                <h3 className="">A game is won when a player earns 25 or more seeds.</h3>
              </div>
              <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 lg:ml-20 xl:ml-20 w-full">
                <img src="/namnam.png" alt="" className="rounded-image"/>
              </div>
            </div>
          </section>
          <DownloadSection />
        <Footer />
      </div>
      </Layout>
    </div>
  )
}

export default About
