import React, { useEffect } from 'react';
import styles from '../styles/features.module.css'
import FeatureItem from './FeatureItem';
import ScrollOut  from "scroll-out";

const Features = () => {
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
    <section className={styles.features_section}>
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl mb-10" >
        <div data-scroll>FEATURES OF OWAREPA GAME</div>
      </h1>
      <p className="text-2xl mb-10">OwarePa is an Android game with exciting features.</p>
      <div className={`flex flex-wrap gap-x-10 features_section ${styles.features_section__content}`}>
        <FeatureItem
          caption="Single Player"
          description="Play alone on your phone"
          imageUrl="/user.svg"
        />
        <FeatureItem
          caption="Multiple Players"
          description="Play with your friends and loved ones"
          imageUrl="/users.svg"
        />
        <FeatureItem
          caption="Play with AI"
          description="Play with computer"
          imageUrl="/ai.svg"
        />
        <FeatureItem
          caption="Play online"
          description="Play with your friends and loved ones"
          imageUrl="/www.svg"
        />
        <FeatureItem
          caption="Features Multiple Languages"
          description="Interact with the game using English, French, Portuguese, Spanish or Twi."
          imageUrl="/translation.svg"
        />
        <FeatureItem
          caption="Different speeds and levels"
          description="You can vary the game at different speeds and levels based on what you are comfortable with"
          imageUrl="/speedometer.svg"
        />
        <FeatureItem
          caption="Different Screen Orientations"
          description="Play on small or large devices."
          imageUrl="/speedometer.svg"
        />
        <FeatureItem
          caption="Interactive Tutorial"
          description="You get helpful tips on how to play the game."
          imageUrl="/speedometer.svg"
        />
      </div>
    </section>
  )
}

export default Features
