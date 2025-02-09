import React from 'react'
import './Best.css'
import orange from '../../Assets/orange.png'
import { useContext } from 'react'
import { StoreContext } from '../../context/interface.ts';
import Error from '../../Components/Error/Error.tsx';
import Product from '../../Components/Product/Product.tsx';

const Best = () => {

    const storeContext = useContext(StoreContext);
    const Best = storeContext?.food_list?.slice(4, 8)

    if (!storeContext) {
      return (
        <Error />
      )
    }


  return (
    <div className='best'>
        <div className='best-title'>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.5rem'}}>
                <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
                <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>Our Products</p>
            </div>
            <h3 style={{fontSize:'2.25rem', fontWeight:'500',letterSpacing:'4%', lineHeight:'3rem', marginBottom:'3.75rem'}}>Explore Our Products</h3>
        </div>
        <div className='best-component'>
        {
                    Best?.map((item, index) => {
                    return(
                    <Product key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} Tier='products'/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Best