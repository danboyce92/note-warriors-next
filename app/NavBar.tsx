import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './nav-bar.css';
import NavBarMenu from './NavBarMenu';
import logo from '../public/imgs/logo.png';


const NavBar = () => {

  return (
    <div className='nav'>
      <div className='navBar'>
        <div className='logo'>
          <Link href={"/"}><Image src={logo} width={65} alt="logo" /></Link>
        </div>

        <div className='links'>
        <Link href={"/about-us"}><div className='link'>About us</div></Link>
        <Link href={"/teachers"}><div className='link'>Teachers</div></Link>
        <Link href={"/students"}><div className='link'>Students</div></Link>
        <Link href={"/faq"}><div className='link'>FAQ</div></Link>
        <Link href={"/contact"}><div className='link'>Contact</div></Link>
        <Link href={"/sign-in"}><div className='link' id="signIn">Sign in</div></Link>

        </div>
      </div>
      <div className='mobile'>
        <div className='logo'>
        <Link href={"/"}><Image src={logo} width={65} alt="logo" /></Link>
        </div>
        <div className='hburger'>
          <NavBarMenu />
        </div>
      </div>

    </div>

  )
}

export default NavBar