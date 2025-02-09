import React from 'react';
import './Accounts.css'

const Accounts = () => {
  return (
    <div className='accounts'>
        <div className='accounts-content'>
            <div>
                <h3>Manage My Account</h3>
                <p>My Profile</p>
                <p>Address Book</p>
                <p>My Payment Options</p>
            </div>
            <div>
                <h3>My Orders</h3>
                <p>My Returns</p>
                <p>My Cancellations</p>
            </div>
            <div>
                <h3>My WishList</h3>
            </div>
        </div>
        <div className='accounts-component'>
            <h3>Edit Your Profile</h3>
            <div className='top-name'>
                <form>
                    <label htmlFor="name">First Name</label>
                    <input type='text' id='name' placeholder='First Name'/>
                </form>
                <form>
                    <label htmlFor="name">Last Name</label>
                    <input type='text' id='name' placeholder='Last Name'/>
                </form>
            </div>
            <div className='top-name'>
                <form>
                    <label htmlFor="name">Email</label>
                    <input type='email' id='name' placeholder='Email Address'/>
                </form>
                <form>
                    <label htmlFor="name">Address</label>
                    <input type='text' id='name' placeholder='Enter your house address'/>
                </form>
            </div>
            <form className='bottom-name'>
                <label htmlFor="password">Password Changes</label>
                <input type='password' id='password' placeholder='Current Password'/>
                <input type='password' id='password' placeholder='New Password'/>
                <input type='password' id='password' placeholder='Confirm New Password'/>
            </form>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:'2rem'}}>
                <button className='mini'>Cancel</button>
                <button className='minor'>Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default Accounts