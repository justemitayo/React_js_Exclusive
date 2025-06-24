import React from 'react';
import './Delivery.css';
import race from '../../Assets/race.png'
import headphone from '../../Assets/headphone.png'
import guard from '../../Assets/guard.png'

const Delivery: React.FC = () => {
  return (
    <div className='delivery-achievement'>
        <div className='delivery-achieve'>
            <img src={race} alt=''/>
            <h6>FREE AND FAST DELIVERY</h6>
            <p>Free delivery for all orders over $140</p>
        </div>
        <div className='delivery-achieve'>
            <img src={headphone} alt=''/>
            <h6>24/7 CUSTOMER SERVICE</h6>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div className='delivery-achieve'>
            <img src={guard} alt=''/>
            <h6>MONEY BACK GUARANTEE</h6>
            <p>We return money within 30 days</p>
        </div>
    </div>
  )
}

export default Delivery