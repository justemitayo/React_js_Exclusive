import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css'
import googl from '../../Assets/googl.png';
import sign from '../../Assets/Sign.png'

const Sign: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='sign'>
      <div className='sign-content'>
      <div>
        <img alt='sign' src={sign} style={{width:'805px', height:'781px'}} className='pic'/>
      </div>
      <div style={{marginLeft:'200px'}}>
        <form className='sign-component'>
          <h3>Create an account</h3>
          <p>Enter your details below</p>
          <div className='sign-inputs'>
            <input type='text' placeholder='Name' required /> 
            <input type='text' placeholder='Email or Phone Number' required /> 
            <input type='password' placeholder='Password' required /> 
          </div>
        </form>
        <div className='sign-max'>
          <button style={{backgroundColor:'#db4444', color:'white'}}>Create Account</button>
          <button style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'1rem'}}>
              <img alt='google' src={googl} style={{width:'24px', height:'24px', marginRight:'5px'}}/>
              <p style={{color:'black'}}>Sign up with Google</p>
          </button>
        </div>
        <p style={{alignSelf:'center', color:'rgba(0, 0, 0, 1)'}}>
          Already have account?
          <button 
          style={{marginLeft:'25px', backgroundColor:'white', borderBottom:'1px solid black', fontSize:'1rem', color:'black'}}
          onClick={() => navigate('/sign/login')}
          >
            Log in</button>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Sign