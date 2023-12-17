'use client' 

import React, { useState } from 'react'
import Image from 'next/image'
import './carousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import note from '../../public/imgs/note.svg';
import edu from '../../public/imgs/edu.svg';
import aim from '../../public/imgs/aim.svg';

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      text: "Note warriors is a music education platform. We specifically focus on the music curriculum taught in Irish schools.",
      svg: note,
    },
    {
      text: "Our goal is to make the learning experience fun whilst providing teachers with student progress and tangible results.",
      svg: edu,
    },
    {
      text: "This platform aims to test what students have been learning in the classroom and giving them feedback.",
      svg: aim,
    }
  ];

  const leftButton = () => {
    if (currentCard === 0) {
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
  }

  const rightButton = () => {
    if (currentCard === cards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  }

  return (
    <div className='carousel-container'>
      <div className='carousel'>
          <div className='card-text'>{cards[currentCard].text}</div>
          <div><Image className='car-card-image' src={cards[currentCard].svg} alt='icon' /></div>
      </div>
      <div onClick={leftButton} className='arrow-button' id="left"><FaChevronLeft /></div>
      <div onClick={rightButton} className='arrow-button' id="right"><FaChevronRight /></div>
    </div>
  )
}

export default Carousel;