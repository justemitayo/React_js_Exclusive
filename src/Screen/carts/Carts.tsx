import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Carts.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/interface.ts';
import dropup from '../../Assets/dropup.png';
import dropd from '../../Assets/dropd.png';
import Error from '../../Components/Error/Error.tsx';



const Carts:React.FC = () => {
  const navigate = useNavigate();
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    return (
      <Error />
    )
  }
  
  return (
    <div className='cart'>
      <div className='cart-component'>
        <div className='cart-component-title'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
          </div>
          <br/>
          <hr/>
      
        {storeContext.food_list?.map((item, index) => {
          if(storeContext.cartItem[item._id] > 0) {
            return(
              <div >
                <div className='cart-component-title cart-items-item'>
                  <p
                    style={{display:'flex', alignItems:'center', marginRight:'3px'}}> <img src={item.image} alt=''/>{item.name}</p>
                  <p >${item.price}</p>
                  <div style={{display:'flex', gap:'5px', alignItems:'center', justifyContent:'center', border:'1px solid gray', borderRadius:'4px', width:'4.5rem'}} >
                    <p>{storeContext.cartItem[item._id]}</p>
                    <div style={{display:'flex', flexDirection:'column'}}> 
                      <img alt='' src={dropup} onClick={() => storeContext.addToCart(item._id)}  style={{width:'1rem', height:'1rem'}}/>
                      <img alt='' src={dropd} onClick={() => storeContext.removeFromCart(item._id)} style={{width:'1rem', height:'1rem'}} />
                    </div>
                  </div>
                  <p>${item.price*storeContext.cartItem[item._id]}</p>
                  <p onClick={() => storeContext.removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr style={{width:'100%'}}/>
              </div>)
              }else{
                return(
                  // <Error />
                  null
                ) 
              }
                
              // error 404 will be the else 
          })
        }
        <div className='cart-lowerButton'>
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className='cart-bottom'>
          <div className='coupon'>
            <input type="text" placeholder='Coupon Code' />
            <button>Apply Coupon</button>
          </div>
          <div className='checkout'>
            <h3>Cart Total</h3>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{storeContext.getTotalCart()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{storeContext.getTotalCart()}</p>
            </div>
            <div className='cart-total-button'>
              <button
                onClick={() => navigate('/cart/checkout')}
              >Process to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts