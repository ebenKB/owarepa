import React, { useState } from 'react'
import FooterStyles from '../styles/footer.module.css'
import { Controller, Scene } from 'react-scrollmagic';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={`${FooterStyles.app_footer} ${FooterStyles.content_texts}`}>
      <div className={`flex flex-wrap ${FooterStyles.footer__wrapper}`}>
        <div className={`flex-none sm:flex-none md:flex-1 ${FooterStyles.nav__links}`}>
          <div className={FooterStyles.footer__item}>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="/about" passHref>
                <a>About</a>
              </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="/contact" passHref>
                <a>Contact</a>
              </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="/privacy" passHref>
                <a>Privacy</a>
              </Link>
          </div>
        </div>
        <div className={`${FooterStyles.nav__links} flex-none sm:flex-none md:flex-1`}>
          <div className={FooterStyles.footer__item}>
            <Link href="mailto:owarepa@gmail.com" passHref>
              <a>
                <span><img src="/email.svg" alt="" className="w-4 mr-2 inline-block"/></span>
                <span>Email</span>
              </a>
            </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="https://web.facebook.com/owarepa" passHref>
              <a target="_blank">
                <span><img src="/facebook.svg" alt="" className="w-4 mr-2 inline-block"/></span>
                <span>Facebook</span>
              </a>
            </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="https://www.instagram.com/owarepa_/" passHref>
              <a target="_blank">
                <span><img src="/instagram.svg" alt="" className="w-4 mr-2 inline-block"/></span>
                <span>Instagram</span>
              </a>
            </Link>
          </div>
          <div className={FooterStyles.footer__item}>
            <Link href="https://chat.whatsapp.com/D5RiDmlWcd16CK4RJtt6eH" passHref>
              <a target="_blank">
                <span><img src="/whatsapp_2.svg" alt="" className="w-4 mr-2 inline-block"/></span>
                <span>WhatsApp</span>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={`flex items-center ${FooterStyles.footer__item}`}>
            <span><img src="/location.svg" alt="" className="w-4 mr-2 inline-block"/></span>
            <span>Accra Ghana</span>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 mb-5">
        &copy;
        {new Date().getFullYear()}
        &nbsp;
        <span>All Rights Reserved</span>
      </p>
    </footer>
  )
}

export default Footer
