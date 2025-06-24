import React from 'react';
import {Link} from 'react-router-dom'
import './Voucher.css'
import vouch from '../../Assets/vouch.png';
import dropdown from '../../Assets/dropdown.png'

const Voucher: React.FC = () => {
  return (
    <div className='vouch'>
      <div className='vouch-content'>
        <div className='voucher-list'>
          <ul className='voucher-menu'>
                    <Link to='/'> <li style={{display:'flex',  justifyContent:'space-between'}}>Women's Fashion <img alt='' src={dropdown} style={{width:'24px', height:'24px'}}/></li></Link>  
                    <Link to='/'><li style={{display:'flex',  justifyContent:'space-between'}}>Men's Fashion <img alt='' src={dropdown} style={{width:'24px', height:'24px'}}/></li></Link> 
                    <Link to='/'><li>Electronics</li></Link>
                    <Link to ='/'><li>Home & Lifestyle</li></Link>
                    <Link to ='/'><li>Medicine</li></Link>
                    <Link to ='/'><li>Sports & Outdoors</li></Link>
                    <Link to ='/'><li>Baby's & Toys</li></Link>
                    <Link to ='/'><li>Groceries & Pets</li></Link>
                    <Link to ='/'><li>Health & Beauty</li></Link>
                </ul>
          </div>
          <div className='voucher-image' style={{ marginBottom:'10px'}}>
            <img alt='' src={vouch} style={{width:'1100px', height:'450px'}}/>
          </div>
      </div>
    </div>
  )
}

export default Voucher