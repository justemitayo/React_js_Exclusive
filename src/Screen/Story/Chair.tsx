import React from 'react'
import './Chair.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import founder from '../../Assets/founder.png'
import twitter from '../../Assets/twitter.png'
import insta from '../../Assets/insta.png'
import linkedln from '../../Assets/linkedln.png'
import director from '../../Assets/director.png'
import designer from '../../Assets/designer.png'


const Chair: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true, // Add navigation dots
        arrows: false, // Show navigation arrows
        autoplay: true, // Autoplay the carousel
        autoplaySpeed: 3000, // Time between each slide transition (3 seconds)
        pauseOnHover: false,
        gap:true,
        swipe: true, // Allow swipe gestures (default is true)
        draggable: true,
        touchMove: true, 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };
  return (
    <div className='chair'>
        <Slider {...settings}>
            <div className='hint'>
                <img alt='' src={founder} className='img'/>
                <h2>Tom Cruise</h2>
                <p>Founder & Chairman</p>
                <div className='social'>
                    <img alt='' src={twitter}/>
                    <img alt='' src={insta}/>
                    <img alt='' src={linkedln}/>
                </div>
            </div>
            <div className='hint'>
                <img alt='' src={director} className='img'/>
                <h2>Emma Watson</h2>
                <p>Managing Director</p>
                <div className='social'>
                    <img alt='' src={twitter}/>
                    <img alt='' src={insta}/>
                    <img alt='' src={linkedln}/>
                </div>
            </div>
            <div className='hint'>
                <img alt='' src={designer} className='img'/>
                <h2>Will Smith</h2>
                <p>Product Designer</p>
                <div className='social'>
                    <img alt='' src={twitter}/>
                    <img alt='' src={insta}/>
                    <img alt='' src={linkedln}/>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Chair