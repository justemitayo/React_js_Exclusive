import React from 'react'
import './Arrival.css';
import orange from '../../Assets/orange.png'


const Arrival = () => {
  return (
    <div className='arrival'>
        <div className='arrival-title'>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.5rem'}}>
                <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
                <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>Featured</p>
            </div>
            <h3 style={{fontSize:'2.25rem', fontWeight:'500',letterSpacing:'4%', lineHeight:'3rem', marginBottom:'3.75rem'}}>New Arrival</h3>
        </div>
        <div className='arrival-content'>
            <div className='play'>
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button>Shop Now</button>
            </div>
            <div className='arrival-upper'>
                <div className='hats'>
                    <h3>Women’s Collections</h3>
                    <p>Featured woman collections that give you another vibe.</p>
                    <button>Shop Now</button>
                </div>
                <div className='arrival-lower'>
                    <div className='speaker'>
                        <h3>Speakers</h3>
                        <p>Amazon wireless speakers</p>
                        <button>Shop Now</button>
                    </div>
                    <div className='perfume'>
                        <h3>Perfume</h3>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arrival