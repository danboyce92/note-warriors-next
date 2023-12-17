import React from 'react'
import Image from 'next/image';
import './faq.css';
import bground from '../../public/imgs/FAQ.jpg'
import Accordion from './Accordion';

const page = () => {
  return (
    <div className='faq'>
      <div id="bground-img"></div>
      <div className='faq-shader'>
        <div className='title'>
          FAQ
        </div>
        <Accordion />
      </div>
    </div>
  )
}

export default page