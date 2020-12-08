import React, { useEffect, useState } from 'react'
import styles from '../styles/dark-contact.module.css'
import Input from './Input';
import emailjs, { init } from 'emailjs-com';
import { useForm } from "react-hook-form";
import Error from './Error';

const DarkContactForm = () => {
  const [hasSentMessage, setSentMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset, formState: { isSubmitSuccessful } } = useForm();
  const [submittedData, setSubmittedData] = useState({})

  useEffect(() => {
    init("user_WoaQG3JrUf57KosqWwjL3");
  }, [])

  useEffect(() => {
    reset(submittedData)
    console.log('The data changed', submittedData)
  }, [submittedData])
  // useEffect(() => {
  //   const interval = null;
  //   if (hasSentMessage) {

  //   }
  //   return () => {}
  // }, [hasSentMessage])

  const sendEmail = async (data) => {
    setLoading(true);
    const template = {
      to_email: 'owarepa@gmail.com',
      user_email: data.email,
      from_email: 'eakbo23@gmail.com',
      from_name: data.name,
      message: data.message,
      reply_to: 'reply here',
      to_name: 'Kojo',
      phone: data.phone,
      notes: '',
    }
    const res = await emailjs.send("admin", 'owarepa_contact_form', template, 'user_WoaQG3JrUf57KosqWwjL3' )
    console.log(res);
    if (res.status == 200) {
      setLoading(false);
      setSentMessage(true);
      // reset({ ...data });
      setSubmittedData(data);
      const interval =  setTimeout(() => {
        setSentMessage(false);
        clearTimeout(interval);
      }, 10000)
    }

    // if (isSubmitSuccessful) {
    //   reset({ ...data });
    // }
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
            <Input placeholder="Enter your name (optional)" name="name" ref={register({ required: false })} />
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input 
              placeholder="Enter your email * " 
              name="email" 
              ref={register({ required: "Email is required",
                pattern: {value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Email is not valid' }})}
            />
            <Error error={errors.email?.message} /> 
          </div>
          <div className={`${styles.item} flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
            <Input 
              type="phone" 
              placeholder="Enter your phone number (optional)" 
              name="phone" 
              ref={register({ required: false, pattern: { value: /[0-9-]+[+]{1}/g, message: 'Phone is not valid' } })}
            />
            <Error error={errors.phone?.message} /> 
          </div>
        </div>
        <div className={`${styles.item} content_text flex-none md:flex-1 lg:flex-1 xl:flex-1`}>
          <textarea 
            id=""
            cols="30"
            rows="5"
            placeholder="Tell us what you have for us. *"
            wrap="soft"
            name="message"
            ref={register({ required: 'Message is required', minLength: {value: 3, message: 'The minimum length is 3'} })}
          />
          <Error error={errors.message?.message} /> 
        </div>
        <div className="text-right mt-10">
          <button className="active-btn" disabled={loading}>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default DarkContactForm
