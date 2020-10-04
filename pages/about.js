import React from 'react'
import Navigation from '../components/Navigation';
import styles from '../styles/about.module.css'
import Footer from '../components/Footer';
import NavLinks from '../components/NavLinks';
import DownloadSection from '../components/DownloadSection';
import AppHeadMeta from '../components/AppHeadMeta';

const About = () => {
  return (
    <div>
    <AppHeadMeta />
      <Navigation setBodyPosition={(val) => console.log(val)}/>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutOverlay}></div>
          <section className={styles.aboutContent}>
            <h1 className="text-5xl mb-10" data-scroll>
              HISTORY OF OWARE
            </h1>
            <div className="flex">
              <div className="flex-1 mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
              </div>
              <div className="flex-1 mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
              </div>
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloremque nesciunt rem illo libero necessitatibus sequi quaerat, 
                ducimus autem deleniti at esse iusto illum minus, est porro. Itaque, beatae perspiciatis.
              </div>
            </div>
          </section>
          <section className={styles.rulesContent}>
            <h1 className="text-5xl mb-10" data-scroll>
              RULES OF OWARE
            </h1>
          </section>
          <section className={styles.namnamContent}>
            <h1 className="text-5xl mb-10" data-scroll>
              HOW TO PLAY OWARE NANAM
            </h1>
          </section>
          <section className={styles.abapaContent}>
            <h1 className="text-5xl mb-10" data-scroll>
              HOW TO PLAY OWARE ABAPA
            </h1>
          </section>
          <DownloadSection />
        <Footer />
      </div>
    </div>
  )
}

export default About
