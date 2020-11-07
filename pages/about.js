import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import AppHeadMeta from '../components/AppHeadMeta';
import Navigation from '../components/Navigation';
import AppFooter from '../components/Footer';
import Download from '../components/DownloadSection';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import useMedia from '../components/UseMedia';
import Cursor from '../components/Cursor';
import { AppContext } from '../context/app.context';

const history = () => {
  const media = useMedia();
  const { data, setAppState } = useContext(AppContext)
  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
      navType: 'opaque'
    }))
  }, []);
  return (
    <>
      {media.x >= 600 && <Cursor />}
      <AppHeadMeta />
      <Navigation />
      <div className={styles.about_wrapper}>
        <Layout>
          <div className={styles.about_wrapper_main}>
            <div className={`${styles.about_wrapper_content}`}>
              <h1
                className="mt-5 md:mt-10 text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl capitalize pt-10"
              >
                Who we are
              </h1>
                <div className="text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
                  <p className="mb-5">
                    We are a community of oware players. Our goal is to promote the game of oware. 
                    Our vision is to make oware the number one board game in Ghana, 
                    and a very popular game around the world. Our mission is to educate 
                    people on how to play oware and enjoy to the fullest, and to organize 
                    competitions as a means to promote the game.
                  </p>
                  <p className="mb-5">
                    Jevielenabel, founded in 2019, is the developer of the OwarePa app. 
                    Its objective is to help the community of oware players promote the 
                    game of oware through apps, social media, videos, documents, etc.
                  </p>
                </div>
                <p>
                  <span>
                    <Link href="https://chat.whatsapp.com/D5RiDmlWcd16CK4RJtt6eH">
                      <a target="_blank">Join the community</a>
                    </Link>
                  </span>
                  <span>
                    &nbsp;of oware players today, and help promote the game of oware.
                  </span>
                </p>
                <p className="text-2xl md:text-3xl mt-10 capitalize">
                  Enjoy Life. Play Oware. Download OwarePa.
                </p>
              </div>
            </div>
            <Download />
            <AppFooter />
          </Layout>
      </div>
    </>
  )
}

export default history
