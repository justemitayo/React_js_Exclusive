import React from 'react';
import './Footer.css'
import send from '../../Assets/icon-send.png'
import qrcode from '../../Assets/qrcode.png'
import google from '../../Assets/google.png'
import apples from '../../Assets/apples.png'
import copyright from '../../Assets/copyright.png'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import insta from '../../Assets/insta.png'
import linkedin from '../../Assets/linkedln.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-component'>
            <div className='footer-content'>
                <div className='exclusive'>
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div>
                        <input 
                        type='email'
                        placeholder='Enter your email'
                        style={{
                            border:'1px solid white',
                            position:'relative',
                            width: '217px',
                            height: '48px',
                            backgroundColor: 'black',
                            fontSize:'1rem'
                        }}
                        />
                        <img alt='icon-send' src={send} style={{width:'1.5rem', height:'1.5rem', position:'relative', left:'-35px', bottom:'-5px'}}/>
                    </div>    
                    
                </div>
                <div className='exclusive'>
                    <h2>Support</h2>
                    <p>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='exclusive'>
                    <h2>Account</h2>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className='exclusive'>
                    <h2>Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='download'>
                    <h2>Download App</h2>
                    <p style={{fontSize:'13px', color:'#828282'}}>Save $3 with App New User Only</p>
                    <div style={{display:'flex', justifyContent:'space-between', }}>
                        <img alt='qrcode' src={qrcode} style={{width:'76px', height:'76px'}}/>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between'
                        }}>
                            <img alt='google' src={google} style={{width:'104px', height:'34px'}}/>
                            <img alt='apple' src={apples} style={{width:'104px', height:'34px'}}/>
                        </div>
                    </div>
                    <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginTop:'15px', width:'168px'}}>
                        <img src={facebook} alt='facebook' style={{width:'1.5rem', height:'1.5rem'}}/>
                        <img src={twitter} alt='twitter' style={{width:'1.5rem', height:'1.5rem'}}/>
                        <img src={insta} alt='instagram' style={{width:'1.5rem', height:'1.5rem'}}/>
                        <img src={linkedin} alt='linkedin' style={{width:'1.5rem', height:'1.5rem'}}/>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'15px 0px 15px 0px', color:'rgba(255, 255, 255, 1)'}}>
                <img alt='copyright' src={copyright} style={{width:'20px', height:'20px', marginRight:'7px', }}/>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer