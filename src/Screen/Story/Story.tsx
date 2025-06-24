import React from 'react'
import './Story.css';
import shopping from '../../Assets/shopping.png';
import home from '../../Assets/house.png';
import bag from '../../Assets/bag.png';
import fund from '../../Assets/fund.png';
import money from '../../Assets/money.png';


const Story: React.FC = () => {
  return (
    <div className='story'>
        <div className='story-content'>
            <div className='our-story'>
                <h3>Our Story</h3>
               <p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p> 
               
              <br />
              <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging  from consumer.</p>
            </div>
            <img alt='about' src={shopping}/>
        </div>
        <div className='story-component'>
            <div className='story-achievement'>
                <div className='story-achieve'>
                    <img src={home} alt=''/>
                    <h6>10.5k</h6>
                    <p>Sellers active our site</p>
                </div>
                <div className='story-achieve'  style={{color:'white', backgroundColor:'#db4444'}}>
                    <img src={money} alt=''/>
                    <h6>33k</h6>
                    <p>Monthly Product Sale</p>
                </div>
                <div className='story-achieve'>
                    <img src={bag} alt=''/>
                    <h6>45.5k</h6>
                    <p>Customer active on our site</p>
                </div>
                <div className='story-achieve'>
                    <img src={fund} alt=''/>
                    <h6>25k</h6>
                    <p>Annual gross sale in our site</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story