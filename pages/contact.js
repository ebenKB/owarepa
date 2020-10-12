import React, { useContext, useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeaderFix from '../components/HeaderFix';
import ContactForm from '../components/ContactForm';
import Contactstyles from "../styles/contact.module.css"
import DownloadSection from '../components/DownloadSection';
import AppHeadMeta from '../components/AppHeadMeta';
import Link from 'next/link';
import Layout from '../components/Layout';
import { AppContext } from '../context/app.context';

const Contact = () => {
  const { data, setAppState } = useContext(AppContext)
  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
    }))
  }, []);
  
  return (
    <section>
      <div>
        <AppHeadMeta />
        <Navigation />
        <Layout>
          <div className={Contactstyles.contactWrapper}>
            <div className={`flex flex-wrap ${Contactstyles.contactWrapper_content} w-full`}>
              <div className={`${Contactstyles.contact_wrapper} ${Contactstyles.contact_intro_wrapper} flex-none md:flex-1 lg:flex-1 xl:flex-1 animate__animated animate__slideInDown`}>
                <div className={`${Contactstyles.contact_wrapper} ${Contactstyles.contact_intro} text-center m-auto`}>
                  <h1 className="capitalize text-5xl">We are happy to hear from you.</h1>
                  <div className="mt-10 text-center inline-flex">
                    <Link href="https://chat.whatsapp.com/D5RiDmlWcd16CK4RJtt6eH" passHref>
                      <a className="flex text-green-400" target="_blank">
                        <span><img src="/whatsapp.svg" alt="" className="w-5 mr-2"/></span>
                        <span>Join us on WhatsApp</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${Contactstyles.contact_form_content} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
                <ContactForm />
              </div>
            </div>
          </div>
          <DownloadSection />
          <Footer />
        </Layout>
      </div>
    </section>
  )
}

export default Contact
