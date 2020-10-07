import React, { useEffect, useContext } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/privacy.module.css';
import DownloadSection from '../components/DownloadSection';
import Link from 'next/link';
import AppHeadMeta from '../components/AppHeadMeta';
import { AppContext } from '../context/app.context';

const Privacy = () => {
  const { data, setAppState } = useContext(AppContext)
  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
      navType: 'opaque'
    }))
  }, []);

  return (
    <div>
        <AppHeadMeta />
        <Navigation />
      <div className={styles.privacy_wrapper}>

          <div className="pt-32">
            <div className={styles.privacy_wrapper_content}>
            <h1 className="text-5xl pb-5">Privacy Terms and Conditions</h1>
            <div className={styles.privacy_items}>
              <h1 className="text-3xl capitalize">User Data Protection</h1>
              <div>
                <p>
                  This game is built with Unity software, thus Unity collects 
                  information about your device such as unique device identifiers, 
                  IP address, country of install, operating system and version, etc.
                </p>
                <p></p>
              </div>
              <div className="font-bold">
                Your personal data is not used for any other purpose other than this game.
              </div>
            </div>
            <div className={styles.privacy_items}>
              <h1 className="text-3xl capitalize">Unity Analytics and Adds</h1>
              <div>
                In addition, this application is integrated with the following Unity services:
                Unity Analytics and Unity Ads. These services also collect additional information.
                These information are used to predict which ads will be of most interest to 
                you based on the games you play and the ads you watch. 
                The developers of this app employs Unity Analytics to 
                help understand how this application is used, to enhance user experience. 
                However, the developers of this app do not collect any personal 
                information or information about your device independent of Unity.
                Also, we do not share any information received from Unity with anyone else.
              </div>
              <div>
                In addition, this app integrates with Photon Cloud services for multiplayer games.
                Some of the information that may be collected include your device’s operating software, 
                your internet service provider, your device’s regional and language settings, 
                and device identifiers such as IP address, etc. However, we do not collect and 
                share any of your personal information with Photon Cloud service. Neither do we 
                send any personal or device information to any opponent you may play with online.
              </div>
              <div>
                For full information on what information Unity collects and what they are used for, 
                please visit unity3d.com/legal/privacy-policy.
                <Link href="https://dashboard.photonengine.com/en/Account/PrivacyAndCookiePolicy" passHref>
                  <a target="_blank" className="text-blue">
                    &nbsp;Click here &nbsp;
                  </a>
                </Link>
                <span>for that of Photon Cloud service.</span>
              </div>
              <div>
                This privacy policy was last updated on <span className="font-bold">July 12, 2020</span>, 
                and has taken immediate effect. Our privacy policy may change from time to time. 
                However, when any significant change(s) are made, you will be informed within the app, 
                and also on the developer's website.
              </div>
            </div>
          </div>
          </div>
      </div>
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default Privacy
