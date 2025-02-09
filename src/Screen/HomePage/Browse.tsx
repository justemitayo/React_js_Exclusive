import React from 'react'
import './Browse.css';
import orange from '../../Assets/orange.png'
import miniComputer from '../../Assets/miniComputer.png'
import miniPhone from '../../Assets/miniPhone.png'
import miniWatch from '../../Assets/miniWatch.png'
import miniCamera from '../../Assets/miniCamera.png'
import miniHeadphone from '../../Assets/miniHeadphone.png'
import miniPad from '../../Assets/miniPad.png'



const Browse = () => {
  return (
    <div className='browse'>
        <div className='browse-title'>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.5rem'}}>
                <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
                <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>Categories</p>
            </div>
            <h3 style={{fontSize:'2.25rem', fontWeight:'500',letterSpacing:'4%', lineHeight:'3rem', marginBottom:'3.75rem'}}>Browse By Category</h3>
        </div>
        <div className='browse-component'>
            <div className='browse-content'>
                <img alt='' src={miniPhone}/>
                <p>Phones</p>
            </div>
            <div className='browse-content'>
                <img alt='' src={miniComputer}/>
                <p>Computers</p>
            </div>
            <div className='browse-content'>
                <img alt='' src={miniWatch}/>
                <p>SmartWatch</p>
            </div>
            <div className='browse-content'>
                <img alt='' src={miniCamera}/>
                <p>Camera</p>
            </div>
            <div className='browse-content'>
                <img alt='' src={miniHeadphone}/>
                <p>HeadPhones</p>
            </div>
            <div className='browse-content'>
                <img alt='' src={miniPad}/>
                <p>Gaming</p>
            </div>
        </div>
    </div>
  )
}

export default Browse