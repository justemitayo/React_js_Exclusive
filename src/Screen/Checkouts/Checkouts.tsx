import React from 'react';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/interface.ts'
import './Checkouts.css';
import bank from '../../Assets/bank.png' 
import Error from '../../Components/Error/Error.tsx';

const Checkouts:React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
      return (
        <Error />
      )
    }
      
    const handleRadioClick = (event) => {
        const value = event.target.value;
        setSelectedPayment((prev) => (prev === value ? null : value));
    };
    


  return (
    <div className='checkouts'>
        <div className='checkout-component'>
            <div className='checkout-left'>
                <h3>Billing Details</h3> 
                 <div className='multi-field'>
                    <p>First Name<span>*</span></p>
                    <input type='text' required/>
                </div>
                <div className='multi-field'>
                    <p>Company Name<span>*</span></p>
                    <input type='text' required/>
                </div>
                <div className='multi-field'>
                    <p>Street Address<span>*</span></p>
                    <input type='text' required/>
                </div>
                <div className='multi-field'>
                    <p>Apartment, floor, etc. (Optional)</p>
                    <input type='text' />
                </div>
                <div className='multi-field'>
                    <p>Town/City<span>*</span></p>
                    <input type='text' required/>
                </div>
                <div className='multi-field'>
                    <p>Phone Number<span>*</span></p>
                    <input type='tel' required/>
                </div>
                <div className='multi-field'>
                    <p>Email Address<span>*</span></p>
                    <input type='email' required/>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                    <input type="checkbox"  
                    style={{width:'1.5rem', height:'1.5rem', borderRadius:'0.25rem', marginTop:'6px'}}
                    />
                    <p>Save this information for faster check-out next time</p>
                </div> 
            </div>
            <div className='checkout-right'>
                {storeContext.food_list?.map((item, index) => {
                    if(storeContext.cartItem[item._id] > 0) {
                        return(
                            <div key={item._id}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <p  style={{display:'flex', alignItems:'center', marginRight:'3px', width:'100%'}}><img style={{width:'3.5rem', height:'3.5rem'}} src={item.image} alt=''/>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        );
                    } else{
                        return(
                            // <Error />
                            null
                        )
                    }
                 
                })}
                <div className='checkout-right-lower'>
                    <div className='checkout-detail'>
                       <p>Subtotal</p>
                       <p>{storeContext.getTotalCart()}</p>
                    </div>
                    <hr/>
                    <div className='checkout-detail'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='checkout-detail'>
                        <p>Total</p>
                        <p>{storeContext.getTotalCart()}</p>
                    </div>
                    <div className='checkout-input'>
                        <form style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'2rem'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <input type='radio' id='cash' value='cash' checked={selectedPayment === 'cash'} onChange={handleRadioClick}/>
                                <label style={{marginLeft:'1rem'}} htmlFor='cash'>Bank</label>
                            </div>
                             <img alt='' src={bank} style={{width: 'max(10vw, 150px)'}}/>

                        </form> 
                        <form style={{display:'flex', alignItems:'center', marginTop:'0.5rem'}}>
                             <input
                                type="radio"
                                id="credit"
                                value="credit"
                                checked={selectedPayment === 'credit'}
                                onChange={handleRadioClick}
                            />
                            <label style={{marginLeft:'1rem'}} htmlFor="credit">Cash on Delivery</label>
                        </form>
                    </div>
                    <div className='checkout-button'>
                        <input type='text' placeholder='Coupon code'/>
                        <button className='butt1'>Apply Coupon</button>
                    </div>
                    <button className='butt2'>Place Order</button>
                </div>
            </div>
        
        </div> 
    </div>
  )
}

export default Checkouts