import React from 'react'
import { useContext} from 'react';
import { StoreContext } from '../../context/interface.ts';
import './Product.css'
import Error from '../Error/Error.tsx';
import heart from '../../Assets/heart.png'
import eye from '../../Assets/eye.png'
import deletes from '../../Assets/delete.png'
import poosh from '../../Assets/poosh.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import {Demo} from '../../Demo/Demo.tsx'


interface props{
    id: string,
    name: string,
    price:number,
    category: string,
    image: string,
    Tier: 'products' | 'wishlist' | 'delete';

}

const Product = ({id, name, price, image, Tier}:props) => {
    const storeContext = useContext(StoreContext);
    const navigate = useNavigate();
    if (!storeContext) {
      return (
        <Error />
      )
    }
    const isProductUnavailable = !storeContext.food_list.some((product) => product._id === id);
    const handleClick = (id: string) => {
      if (id) {
        // Check if product is unavailable
        if (isProductUnavailable) {
          toast.error('This product is unavailable!', {
            position: 'top-center',
            
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          return; // Prevent navigation if the product is unavailable
        }
        navigate(`/product/${id}`);
      } else {
        <Error />;
      }
    };
 
  return (
  
    <div className='product'>
      <p style={{visibility:'hidden'}}>{id}</p>
        <div className='product-component'>
          <div className='product-content'>
            <img src={image} alt='' className='good'/>
          </div>
          <div  className='mine' style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'10px', marginRight:'15px', gap:'5px'}}>
            {Tier === 'products' && <img src={heart} alt='' className='like' onClick={() => {
              storeContext?.addToLike(id); 
              }}/>}
            {(Tier === 'products' || Tier === 'wishlist') && <img src={eye} alt='' className='like' onClick={() => handleClick(id)}/>}
            {Tier === 'delete' && <img className='like' alt='' src={deletes} onClick={() => storeContext?.removeFromLike(id)}/>}
          </div>
        </div>  
        {(Tier === 'wishlist' || Tier === 'delete') && <p className='dave'> <img alt='' src={poosh} onClick={() => storeContext?.addToCart(id)} style={{width:'1.5rem', height:'1.5rem'}}/>Add To Cart</p>}
        <div className='product-lower'>
          <p>{name}</p>
          <p className='money'>${price}</p>
        </div>
    </div>
  )
}

export default Product