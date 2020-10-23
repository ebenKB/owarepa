import React from 'react';
import Layout from '../components/Layout';
import AppHeadMeta from '../components/AppHeadMeta';
import Navigation from '../components/Navigation';
import AppFooter from '../components/Footer';
import Download from '../components/DownloadSection';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import useMedia from '../components/UseMedia';
import Cursor from '../components/Cursor';

const history = () => {
  const media = useMedia();
  return (
    <>
      {media.x >= 600 && <Cursor />}
      <AppHeadMeta />
      <Navigation />
        <Layout>
        <div className={styles.about_wrapper}>
          <div className={`${styles.about_wrapper_content}`}>
            <h1 className="text-5xl capitalize pt-10">Who we are</h1>
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
            <p className="text-3xl mt-10 capitalize">
              Enjoy Life. Play Oware. Download OwarePa.
            </p>
          </div>
          </div>
          <Download />
          <AppFooter />
        </Layout>

    </>
  )
}

export default history
