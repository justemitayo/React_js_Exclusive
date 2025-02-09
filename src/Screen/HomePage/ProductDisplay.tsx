import React, { useContext } from 'react'
// import { food_list } from '../../Demo/Demo.tsx'
import { StoreContext } from '../../context/interface.ts'
import Error from '../../Components/Error/Error.tsx';
import Product from '../../Components/Product/Product.tsx';
import orange from '../../Assets/orange.png'


const ProductDisplay:React.FC = () => {

    const storeContext = useContext(StoreContext);
    const Datas = storeContext?.food_list?.slice(8, 16)

    if (!storeContext) {
      return (
        <Error />
      )
    } 

  return (
    <div>
        <div className='best'>
          <div className='best-title'>
              <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.5rem'}}>
                  <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
                  <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>This Month</p>
              </div>
              <div>
                <h3 style={{fontSize:'2.25rem', fontWeight:'500',letterSpacing:'4%', lineHeight:'3rem', marginBottom:'3.75rem'}}>Best Selling Products</h3>

              </div>
          </div>
          <div className='best-component'>
            {
                Datas?.map((item, index) => {
                    return(
                    <Product key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} Tier='products'/>
                    )
                })
            }
          </div>.
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <button className='butt2'>View All Products</button>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay