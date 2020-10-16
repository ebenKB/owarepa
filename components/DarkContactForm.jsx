import React, { useEffect, useState } from 'react'
import styles from '../styles/dark-contact.module.css'
import Input from './Input';
import emailjs, { init } from 'emailjs-com';
import { useForm } from "react-hook-form";
import Error from './Error';

const DarkContactForm = () => {
  useEffect(() => {
    init("user_WoaQG3JrUf57KosqWwjL3");
  }, [])

  // useEffect(() => {
  //   const interval = null;
  //   if (hasSentMessage) {

  //   }
  //   return () => {}
  // }, [hasSentMessage])
  const [hasSentMessage, setSentMessage] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const sendEmail = async (data) => {
    console.log('We want to send an email', data)
    const template = {
      to_email: 'eboafo.adjei@gmail.com',
      user_email: 'eboafo.adjei@gmail.com',
      from_email: 'unveilface@gmail.com',
      from_name: 'Owarepa',
      message: 'message is here',
      reply_to: 'reply here',
      to_name: 'Kojo',
      phone: '054',
      notes: 'hello.. testing',
    }
    const res = await emailjs.send("1", 'owarepa_contact_form', template, 'user_WoaQG3JrUf57KosqWwjL3' )
    if (res.status == 200) {
      setSentMessage(true);
      const interval =  setTimeout(() => {
        setSentMessage(false);
        clearTimeout(interval);
      }, 10000)
    }
  }

  const handleError = (errs) => {
    console.log('There are errroos', errs)
  }

  return (
    <div className={`${styles.contact_wrapper}`}>
      {hasSentMessage && (
        <div className={`content_text ${styles.notification}`}>
        <span>You message has been delivered</span>
        <button>Close</button>
      </div>
      )}
      <h2 className="text-3xl text-center mb-10">Send Us An Email Instead</h2>
      <form action="" className="content_text" onSubmit={handleSubmit(sendEmail, handleError)}>
        <div className={`${styles.content} flex flex-wrap `}>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input placeholder="What name shall we call you?" name="name" ref={register({ required: true })} />
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input placeholder="Enter your email" name="email" ref={register} />
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input 
              type="phone" 
              placeholder="Can you give us your phone number?" 
              name="phone" 
              ref={register({ required: true, pattern: { value: /[0-9-]+[+]{1}/g, message: 'Phone is not valid' } })}
            />
            <Error error={errors.phone?.message} /> 
          </div>
        </div>
        <div className={`${styles.item} content_text flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
          <textarea 
            id=""
            cols="30"
            rows="5"
            placeholder="Tell us what you have for us."
            wrap="soft"
            name="message"
            ref={register({ required: 'This field is required', minLength: {value: 3, message: 'The minimum length is 3'} })}
          />
          <Error error={errors.message?.message} /> 
        </div>
        <div className="text-right mt-10">
          <button className="active-btn">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default DarkContactForm
