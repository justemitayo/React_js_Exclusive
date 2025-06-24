import React from 'react'
import './Sign.css'
import Sign from '../../Assets/Sign.png'

const Log: React.FC = () => {
  return (
    <div className='sign'>
      <div className='sign-content'>
      <div>
      <img alt='sign' src={Sign} style={{width:'805px', height:'781px'}} />
      </div>
      <div style={{marginLeft:'200px'}}>
        <form className='sign-component'>
          <h3>Log in to Exclusive</h3>
          <p>Enter your details below</p>
          <div className='sign-inputs'>
            <input type='text' placeholder='Email or Phone Number' required /> 
            <input type='password' placeholder='Password' required /> 
          </div>
        </form>
        <div className='sign-mini'>
          <button className='log'>Log in</button>
          <button className='forget'>Forget Password?</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Log
