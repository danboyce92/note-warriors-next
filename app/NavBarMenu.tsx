'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import hburg from '../public/imgs/hburg.svg';

const NavBarMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleExitClick = () => {
    setIsChecked(!isChecked);
  };

  const toggle = isChecked ? 'active' : 'inactive';

  return (
    <div>
      <div className='menu-button'>
        <label htmlFor="hburg-toggle">
          <Image src={hburg} alt="hamburger icon" width={60} id='icon' />
        </label>
        <input onChange={handleExitClick} type='checkbox' id="hburg-toggle" checked={isChecked}/>
      </div>
      <div className={`${toggle}`} id="list">
        <div className='exit' onClick={handleExitClick}>X</div>
        <Link href={"/about-us"}><div onClick={handleExitClick} className='link'>About us</div></Link>
        <Link href={"/teachers"}><div className='link'>Teachers</div></Link>
        <Link href={"/students"}><div className='link'>Students</div></Link>
        <Link href={"/faq"}><div className='link'>FAQ</div></Link>
        <Link href={"/contact"}><div className='link'>Contact</div></Link>
        <Link href={"/sign-in"}><div className='link' id="signIn">Sign in</div></Link>
      </div>
  </div> 
  )
}

export default NavBarMenu;