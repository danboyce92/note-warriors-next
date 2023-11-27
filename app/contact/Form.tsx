'use client'
import React, { useState, useRef, FormEvent } from 'react'

const standard = '*Leave us a message and we will get back to you as soon as possible.'

const Form = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [toggle, setToggle] = useState('');
    const [colorTog, setColorTog] = useState('');

  const sendMsg = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }

    setToggle('Thank you, we have received your message and will be in touch soon.');
    setColorTog('color-active')
    setTimeout(() => {
      setToggle('')
      setColorTog('');
    }, 3000)

  }

  return (
    <div>
      <form onSubmit={sendMsg} className='form' ref={formRef}>
        <h1>Contact us</h1>
        <span>Name</span>
        <input required placeholder='Enter name here..' />
        <span>Email</span>
        <input required placeholder='Enter email here..' />
        <span>Message</span>
        <textarea required placeholder='Your message here..' />
        <button className='send-btn'>Send</button>
      </form>
      <p className={`instructions ${colorTog}`}>{toggle || standard}</p>
    </div>
  )
}

export default Form