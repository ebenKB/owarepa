import React from 'react'
import styles from '../styles/dark-contact.module.css'
import Input from './Input';

const DarkContactForm = () => {
  return (
    <div className={`${styles.contact_wrapper}`}>
      <h2 className="text-3xl text-center mb-10">Send Us An Email Instead</h2>
      <form action="" className="content_text">
        <div className={`${styles.content} flex flex-wrap `}>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input placeholder="What name shall we call you?"/>
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input placeholder="Enter your email"/>
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input placeholder="Can you give us your phone number?"/>
          </div>
        </div>
        <div className={`${styles.item} content_text flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
          <textarea name="" id="" cols="30" rows="5" placeholder="Tell us what you have for us." />
        </div>
        <div className="text-right mt-10">
          <button className="active-btn">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default DarkContactForm
