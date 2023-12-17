import React from 'react';
import './sign-in.css';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sin-shader'>
        <div className='sign-in-title'>Sign in</div>
       
        <form>
          <h1 className='header'>Sign in</h1>
          <span className='span'>Email</span>
          <input required className='input' placeholder='Enter your email..' />
          <span className='span'>Password</span>
          <input required className='input' type='password' placeholder='Enter your password..' />
          <button className='sign-btn'>Sign in</button>
          <Link href={"/sign-up"}><p className='sign-up-prompt'>Don&apos;t have an account? Sign up here!</p></Link>
        </form>
        
      </div>
    </div>
  );
};

export default SignIn;