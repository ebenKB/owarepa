import React from 'react';
import styles from '../styles/benefits.module.css'
import Link from 'next/link'
import ItemListWrapper from './ItemListWrapper';

const BenefitsSection = () => {
  return (
    <section className={styles.benefits_section}>
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl mb-10">
        <div data-scroll>4 BENEFITS OF PLAYING OWARE GAME</div>
      </h1>
      <div className={`${styles.content_text} sm:w-full md:w-4/5 xl:w-11/12`}>
        <ItemListWrapper>
          <li className="pb-8">
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">Playing Oware brings social togetherness</h3>
            <p className="faint-caption content_text text-justify">A bond of friendship is formed between players and spectators alike.</p>
          </li>
          <li className="pb-8">
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">Acadamically, Oware improves one's counting ability</h3>
            <p className="faint-caption content_text text-justify">At various levels of the game, users ponder over best possible moves that can make them win.</p>
          </li>
          <li className="pb-8">
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">It is a memory booster</h3>
            <p className="faint-caption content_text text-justify">
              One needs to keep count of the number of seeds in each hole on the board as he contemplates his next move. 
            </p>
            <p className="faint-caption content_text text-justify mt-5">
              As a player simulates in his mind, his potential moves and eventually the opponent's counter moves, 
              he needs to keep a mental picture of how many seeds are in each hole.
            </p>
          </li>
          <li className="">
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">It helps one to be a strategic thinker</h3>
            <p className="faint-caption content_text text-justify">
              Since your objective is to win more seeds, 
              you do not only think of moves that will make you capture your opponent's seeds, 
              but moves that will eventually limit your opponent's chances of capturing many more seeds. 
            </p>
            <p className="faint-caption content_text mt-5 text-justify">
              In Abapa, you sometimes have to sacrifice some seeds with the objective of either capturing 
              more seeds afterward, or getting the chance to rearrange the seeds on the board to your favor.
            </p>
          </li>
        </ItemListWrapper>
        <div className={`pt-12 ${styles.content_text} text-right`}>
          <Link href="/about" className="">
            <a className="link-btn">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
