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
import Cursor from '../components/Cursor';
import useMedia from '../components/UseMedia';
import DarkContactForm from '../components/DarkContactForm';

const Contact = () => {
  const { data, setAppState } = useContext(AppContext)
  const media = useMedia();

  useEffect(() => {
    setAppState(({
      ...data,
      position: 'default',
    }))
  }, []);
  
  return (
    <section>
    {media.x >= 600 && <Cursor />}
      <div>
        <AppHeadMeta />
        <Navigation />
        <Layout>
          <div className={Contactstyles.contactWrapper}>
            <div className={`${Contactstyles.contactWrapper_content} w-full`}>
              <div className={`${Contactstyles.contact_wrapper} ${Contactstyles.contact_intro_wrapper} flex-none md:flex-1 lg:flex-1 xl:flex-1 animate__animated animate__slideInDown`}>
                <div className={`${Contactstyles.contact_wrapper} ${Contactstyles.contact_intro} text-center m-auto`}>
                  <h1 className="capitalize text-3xl md:text-5xl">We are happy to hear from you.</h1>
                  <div className={`${Contactstyles.links_group} mt-10 text-center flex-none md:inline-flex`}>
                    <Link href="https://chat.whatsapp.com/D5RiDmlWcd16CK4RJtt6eH" passHref>
                      <a className="block flex-none md:flex items-center text-gray-400" target="_blank">
                        {/* <span><img src="/whatsapp.svg" alt="" className="w-6 mr-2"/></span> */}
                        <span className="">Join WhatsApp Group</span>
                      </a>
                    </Link>
                    <Link href="https://wa.me/+233266263760" passHref>
                      <a className="block flex-none md:flex items-center text-gray-400" target="_blank">
                        {/* <span><img src="/whatsapp.svg" alt="" className="w-6 mr-2"/></span> */}
                        <span className="">Send WhatsApp Message</span>
                      </a>
                    </Link>
                    <Link href="https://web.facebook.com/groups/716684239191984" passHref>
                      <a className="block flex-none md:flex items-center text-gray-400" target="_blank">
                        {/* <span><img src="/whatsapp.svg" alt="" className="w-6 mr-2"/></span> */}
                        <span className="">Join Facebook Group</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${Contactstyles.contact_form_content} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
                <DarkContactForm />
              </div>
            </div>
          </div>
          <DownloadSection />
          <Footer />
        </Layout>s
      </div>
    </section>
  )
}

export default Contact
