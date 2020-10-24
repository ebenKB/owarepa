import React from 'react';
import styles from '../styles/download.module.css'
import Link from 'next/link';

const DownloadSection = () => {
  return (
    <section className={`${styles.download_section} text-center`}>
      <h1 className="text-5xl">
        <div data-scroll>Download Game</div>
        </h1>
      <div className="pt-10">
        <Link href="https://play.google.com/store/apps/details?id=com.jeviasolutions.OwarePa" passHref>
          <a target="_blank">
            <img src="/playstore.png" alt="" className="text-center w-56 inline-block"/>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default DownloadSection
