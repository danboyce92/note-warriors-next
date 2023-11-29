import React from 'react'
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './about-us.css';
import Carousel from './Carousel';
import note from '../../public/imgs/note.svg';
import edu from '../../public/imgs/edu.svg';
import aim from '../../public/imgs/aim.svg';


const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='shader'>
        <div className='about-title'>About us</div>
        <div className='card-container'>
          <div className='card' id="music">
            <div className='card-text'>Note warriors is a music education platform. We specifically focus on the music curriculum taught in Irish schools.</div>
            <div><Image className='card-image' src={note} alt='note icon' /></div>
          </div>
          <div className='card' id="experience">
            <div className='card-text'>Our goal is to make the learning experience fun whilst providing teachers with student progress and tangible results.</div>
            <div ><Image className='card-image' src={edu} alt="education icon" /></div>
          </div>
          <div className='card' id="aim">
            <div className='card-text'> This platform aims to test what students have been learning in the classroom and giving them feedback.</div>
            <div><Image className='card-image' src={aim} alt='aims icon' /></div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default AboutUs;