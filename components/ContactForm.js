import React from 'react'
import styles from '../styles/contact.module.css';

const ContactForm = () => {
  return (
    <div>
      <div className="text-center mt-20 capitalize">Send us an email instead</div>
      <div className={styles.contact_form}>
        <form action="">
          <input type="text" className="text" placeholder="What name shall we call you?" />
          <input type="text" className="text" placeholder="What is your email?" />
          <input type="text" className="text" placeholder="What is your phone number?" />
          <textarea name="" id="" cols="30" rows="6" placeholder="Feel free to tell us anything"></textarea>
          <div className="text-sm mt-5 text-current text-opacity-25">We will not share your data with anyone.</div>
          <button className="bg-opacity-100">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
