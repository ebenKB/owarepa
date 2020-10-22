import React, { useEffect } from 'react';
import styles from '../styles/play.module.css';
import ScrollOut  from "scroll-out";

export const Abapa = () => {
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
    <section className={styles.abapaContent}>
      <h1 className="big-caption mb-10 pure-caption">
        <div data-scroll>HOW TO PLAY OWARE ABAPA</div>
      </h1>
      <div className="flex flex-wrap flex-wrap-reverse text-justify content_text w-full reverse-item">
        <div className="faint-caption flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
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
        <div className="sm:mb-5 flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 lg:ml-20 xl:ml-20 w-full">
          <img src="/namnam.png" alt="" className="rounded-image"/>
        </div>
      </div>
    </section>
  )
}

export const Namnam = () => {
  return (
    <section className={styles.namnamContent}>
      <h1 className="mb-10 big-caption pure-caption">
        <div data-scroll>HOW TO PLAY OWARE NANAM</div>
      </h1>
      <div className="flex flex-wrap-reverse text-justify content_text reverse-item">
        <div className="faint-caption flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 w-full sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
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
  )
}

const Play = {
  Namnam,
  Abapa,
};

export default Play;