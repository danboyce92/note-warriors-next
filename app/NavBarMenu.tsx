'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import hburg from '../public/imgs/hburg.svg';

const NavBarMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleExitClick = () => {
    setIsChecked(!isChecked);
  };

  const toggle = isChecked ? 'active' : '';

  return (
    <div>
      <div className='menu-button'>
      <Image src={hburg} alt="hamburger icon" width={60} id='icon' />
      <input onClick={handleExitClick} type='checkbox' id="hburg-toggle" checked={isChecked}/>
      </div>
      <div className={`${toggle} hello`}>
        <div className='exit' onClick={handleExitClick}>X</div>
        <div className='link'>About us</div>
        <div className='link'>Teachers</div>
        <div className='link'>Students</div>
        <div className='link'>FAQ</div>
        <div className='link'>Contact</div>
        <div className='link' id="signIn">Sign in</div>

      </div>
  </div> 
  )
}

export default NavBarMenu;