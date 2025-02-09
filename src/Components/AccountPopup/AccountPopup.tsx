import React from 'react'
import './AccountPopup.css';
import damn from '../../Assets/damn.png'
import order from '../../Assets/order.png'
import remove from '../../Assets/remove.png'
import star from '../../Assets/star.png'
import leave from '../../Assets/leave.png'
import { Link } from 'react-router-dom';



interface props{
    setShowAccount: React.Dispatch<React.SetStateAction<boolean>>
}
const AccountPopup = ({setShowAccount}: props) => {
  return (
    <div className='account'>
      <div className='account-component'>
        <div className='remove'>
        <p onClick={() => setShowAccount(false)} >x</p>
        </div>
        <Link to='/account' onClick={() => setShowAccount(false)}>
          <div className='when'>
            <img alt='' src={damn}/>
            <p>Manage My Account</p>
          </div>
        </Link>
        <Link to='/account' onClick={() => setShowAccount(false)}>
          <div className='when'>
            <img alt='' src={order}/>
            <p>My Order</p>
          </div>
        </Link>
        <Link to='/account' onClick={() => setShowAccount(false)}>
          <div className='when'>
            <img alt='' src={remove}/>
            <p>My Cancellations</p>
          </div>
        </Link>
        <Link to='/account' onClick={() => setShowAccount(false)}>
          <div className='when'>
            <img alt='' src={star}/>
            <p>My Reviews</p>
          </div>
        </Link>
        <Link to='/account' onClick={() => setShowAccount(false)}>
          <div className='when'>
            <img alt='' src={leave}/>
            <p>Logout</p>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default AccountPopup