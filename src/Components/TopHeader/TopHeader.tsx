import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import './TopHeader.css'

const TopHeader:React.FC = () => {
  return (
    <div className='topheader'>
        <div className='topheader-content'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <span style={{fontSize: '14px', fontWeight:'600', textDecoration:'underline', marginLeft:'4px'}}> ShopNow</span></p>
            <div>
              <p style={{display:'flex', alignItems:'center'}}>English <RiArrowDropDownLine style={{width:'1.5rem', height: '1.5rem' }} /></p>
            </div>
        </div>
    </div>
  )
}

export default TopHeader