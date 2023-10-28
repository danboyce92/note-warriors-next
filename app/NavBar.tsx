import React, { useState } from 'react'
import Image from 'next/image';
import './nav-bar.css';
import NavBarMenu from './NavBarMenu';
import logo from '../public/imgs/logo.png';


const NavBar = () => {

  return (
    <div className='nav'>
      <div className='navBar'>
        <div className='logo'>
          <Image src={logo} width={65} alt="logo" />
        </div>

        <div className='links'>
          <div className='link'>About us</div>
          <div className='link'>Teachers</div>
          <div className='link'>Students</div>
          <div className='link'>FAQ</div>
          <div className='link'>Contact</div>
          <div className='link' id="signIn">Sign in</div>

        </div>
      </div>
      <div className='mobile'>
        <div className='logo'>
          <Image src={logo} width={65} alt="logo" />
        </div>
        <div className='hburger'>
          <NavBarMenu />
        </div>
      </div>

    </div>

  )
}

export default NavBar