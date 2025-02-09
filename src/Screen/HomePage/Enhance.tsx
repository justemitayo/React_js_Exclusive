import React from 'react'
import { useState, useEffect } from 'react';
import './Enhance.css'

const Enhance = () => {

    const duration = 5 * 23 * 60 * 60 * 1000;

    const [time, setTime] = useState<number>(duration);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time-1000)
        }, 1000)
        return () => {
            clearTimeout(timer);
          };
    }, [time]);

    const getTimer = (milliseconds:number) => {
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


    const formattedTime = getTimer(time)

  return (
    <div className='enhance'>
        <div className='enhance-component'>
            <h6>Categories</h6>
            <h2>Enhance Your <br /> Music Experience</h2>
            <div className='enhance-content' onChange={(e) => e.preventDefault()}>
                <span>{formattedTime.days} <p>Days</p></span>
                <span>{formattedTime.hours} <p>Hours</p></span>
                <span>{formattedTime.minutes} <p>Minutes</p></span>
                <span>{formattedTime.seconds} <p>Seconds</p></span>
            </div>
            <button>Buy Now!</button>
        </div>
    </div>
  )
}

export default Enhance