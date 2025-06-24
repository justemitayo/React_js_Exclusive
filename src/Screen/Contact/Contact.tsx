import React from 'react'
import './Contact.css'
import tel from '../../Assets/tel.png';
import msg from '../../Assets/msg.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-component'>
            <div className='contact-content'>
                <div style={{paddingBottom:'1rem', borderBottom:'1px solid black'}}>
                    <h6> <img alt='call' src={tel}/>Call To Us</h6>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
                <div style={{paddingTop:'2rem'}}>
                    <h6> <img alt='message' src={msg}/>Write To US</h6>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className='contact-input'>
                <div>
                    <form className='contact-form'>
                        <input type="text" placeholder='Your Name' required />
                        <input type="email" placeholder='Your Email' required/>
                        <input type="tel"placeholder='Your Phone' required />
                    </form>
                    <input type="text" placeholder='Your Message' className='int'/>
                </div>
                <div style={{display:'flex', justifyContent:'flex-end', marginRight:'1rem', flexWrap:'wrap'}}>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact