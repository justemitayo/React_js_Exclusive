import React from 'react'
import { useContext } from 'react';
import Error from '../../Components/Error/Error.tsx';
import { StoreContext } from '../../context/interface.ts';
import Product from '../../Components/Product/Product.tsx';
import './WishList.css'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const WishList:React.FC = () => {
    // const navigate = useNavigate();
    const storeContext = useContext(StoreContext);
    const Datas = storeContext?.food_list?.slice(5, 9)

  
    useEffect(() => {
      if (!Datas) {
          toast.error('Invalid Product!')
      }
  }, [Datas])


  if (!Datas) {
      return (
          <div>
              <Error />
          </div>
      )
  }
  return (
    <div className='wishlist'>
        <div className='wishlist-upper'>
            <div className='wishlist-title'>
                <h4>Wishlist</h4>
                <button>Move All To Bag</button>
            </div>
            <div className='wishlist-content'>
                {
                    storeContext?.food_list?.map((item, index) => {
                        if(storeContext?.likeItem[item._id] > 0) {
                        return(
                        <Product key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} Tier='delete'/>
                        )
                    } else{
                        return(null)
                    }
                    })
                }
            </div>
        </div>
        <div className='wishlist-upper'>
          <div className='wishlist-title'>
            <div>
              <img alt=''/>
              <h4>Just For You</h4>
            </div>
            <button>See All</button>
          </div>
          <div className='wishlist-content'>
            {
                Datas?.map((item, index) => {
                    return(
                    <Product key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} Tier='wishlist'/>
                    )
                })
            }
          </div>
        </div>
    </div>
  )
}

export default WishList