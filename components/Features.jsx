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
      <h1 className="text-5xl mb-10" data-scroll>
        FEATURES OF OWAREPA GAME
      </h1>
      <p className="text-2xl mb-10">OwarePa is an Android game with exciting features.</p>
      <div className={`flex flex-wrap features_section ${styles.features_section__content}`}>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Single Player"
            description="Play alone on your phone"
            imageUrl="/user.svg"
          />
        </div>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Multiple Players"
            description="Play with your friends and loved ones"
            imageUrl="/users.svg"
          />
        </div>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Play with AI"
            description="Play with computer"
            imageUrl="/ai.svg"
          />
        </div>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Play online"
            description="Play with your friends and loved ones"
            imageUrl="/www.svg"
          />
        </div>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Multiple Languages"
            description="Interact with the game using any language that you are comfortable with."
            imageUrl="/translation.svg"
          />
        </div>
        <div className="flex-1 mb-8">
          <FeatureItem
            caption="Different speeds and levels"
            description="You can vary the game at different speeds and levels based on what you are comfortable with"
            imageUrl="/speedometer.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default Features
