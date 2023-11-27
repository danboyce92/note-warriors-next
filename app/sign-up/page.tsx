import React from 'react';
import Image from 'next/image';
import './sign-up.css';
import signup from '../../public/imgs/signup.jpg';

const SignUp = () => {
  return (
    <div>
      <Image src={signup} alt='background' id="sign-up-img" />
      <div className='shader'>
        <div className='sign-up-title'>Sign up</div>

        <form>
          <h1 className='header'>Sign up</h1>
          <span className='span'>Email</span>
          <input required className='input' placeholder='Enter your email..' />
          <span className='span'>Password</span>
          <input required className='input' type='password' placeholder='Enter your password..' />
          <button className='sign-btn'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;