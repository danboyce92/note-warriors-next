import './landing.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='background'>
      <div className='shader'>
        <div className='title-container'>
          <div className='title'>Note <br/> Warriors</div>
          <div className='text'>Score High, Soar Higher. <br/> Play, Learn, Conquer.</div>  
          <div className='buttons'>
          <Link href={"/sign-up"}><button className='registerButton'>Register</button></Link>
              <div className='spacer'></div>
              <Link href={"/sign-in"}><button className='signinButton'>Sign in</button></Link>
            
          </div>
            
          

        </div>
 
      </div>
  
    </main>
  )
}
