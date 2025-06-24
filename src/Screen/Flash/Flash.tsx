import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Flash.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/interface.ts';
import Error from '../../Components/Error/Error.tsx';
import Product from '../../Components/Product/Product.tsx';
import orange from '../../Assets/orange.png'

const Flash:React.FC = () => {


  const duration = 3 * 24 * 60 * 60 * 1000;

  const [time, setTime] = useState<number>(duration);

  useEffect(() => {
      const timer = setTimeout(() => {
          setTime(time-1000)
      }, 1000)
      return () => {
          clearTimeout(timer);
        };
  }, [time]);

  const getFormattedTime = (milliseconds:number) => {
      let total_seconds = Math.floor(milliseconds/1000);
      let total_minutes = Math.floor(total_seconds /60);
      let total_hour = Math.floor(total_minutes /60);
      let total_days = Math.floor(total_hour /24);

      return{
          days: total_days,
          hours: total_hour% 24,
          minutes: total_minutes % 60,
          seconds: total_seconds% 60
  }
  }

  const storeContext = useContext(StoreContext);
  const flash = storeContext?.food_list?.slice(0, 8)

  if (!storeContext) {
    return (
      <Error />
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true, // Add navigation dots
    arrows: false, // Show navigation arrows
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Time between each slide transition (3 seconds)
    pauseOnHover: true,
    gap:true,
    swipe: true, // Allow swipe gestures (default is true)
    draggable: true,
    touchMove: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };




    const formattedTime = getFormattedTime(time)

  return (
    <div className='flash'>
        <div className='flash-head'>
          <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.5rem'}}>
            <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
            <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>Today's</p>
          </div>
          <div style={{display:'flex', gap:'5rem', alignItems:'flex-end'}}>
            <h3>Flash Sales</h3>
            <div className='flash-timer'>
              <p>Days <span>{formattedTime.days}</span></p>
              <span style={{color:'#db4444'}}>:</span>
              <p>Hours <span>{formattedTime.hours}</span></p>
              <span style={{color:'#db4444'}}>:</span>
              <p>Minutes <span>{formattedTime.minutes}</span></p>
              <span style={{color:'#db4444'}}>:</span>
              <p>Seconds <span>{formattedTime.seconds}</span></p>
            </div>
          </div>
        </div>
        <div className='slider-contain'>
          <Slider {...settings}>
              {flash?.map((item, index) => (
                <div key={index}> {/* Make sure each item is wrapped */}
                  <Product 
                    id={item._id} 
                    name={item.name} 
                    category={item.category} 
                    price={item.price} 
                    image={item.image} 
                    Tier='products'
                  />
                </div>
              ))}
          </Slider>
        </div>
    </div>
  )
}

export default Flash