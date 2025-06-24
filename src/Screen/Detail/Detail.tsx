import React, { useEffect } from 'react'
import './Detail.css'
import { StoreContext } from '../../context/interface.ts'
import { useContext } from 'react'
import Error from '../../Components/Error/Error.tsx';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import plus from '../../Assets/plus.png';
import minus from '../../Assets/minus.png'
import heart from '../../Assets/heart.png'
import cars from '../../Assets/cars.png'
import recycle from '../../Assets/recycle.png'
import { useNavigate } from 'react-router-dom';
import orange from '../../Assets/orange.png'
import Product from '../../Components/Product/Product.tsx';

const Detail: React.FC = () => {
    const storeContext = useContext(StoreContext);

    const params = useParams();
    const navigate = useNavigate();
    const categoryToFilter = 'Electronics'


    const product = storeContext?.food_list?.find(item => item._id === String(params?.id));

    const Dean = storeContext?.food_list?.filter(item => item.category === categoryToFilter);

    useEffect(() => {
        if (!product) {
            toast.error('Invalid Product!')
        }
    }, [product])


    if (!product) {
        return (
            <div>
                <Error />
            </div>
        )
    }
    return (
        <div className='detail'>
            <div className='detail-component'>
                <div className='detail-image'>
                    <div style={{display:'flex', flexDirection:'column', maxHeight:'72vh'}}>
                        <div style={{width:'11.625rem', maxWidth:'15vw', height:'10.145rem', maxHeight:'18vh', marginBottom:'1rem',display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#f5f5f5'}}>
                        <img alt='' className='cam' src={product?.image}/>
                        </div>
                        <div style={{width:'11.625rem', maxWidth:'15vw', height:'10.145rem', maxHeight:'18vh', marginBottom:'1rem',display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#f5f5f5'}}>
                        <img alt='' className='cam' src={product?.image}/>
                        </div>
                        <div style={{width:'11.625rem', maxWidth:'15vw', height:'10.145rem', maxHeight:'18vh', marginBottom:'1rem',display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#f5f5f5'}}>
                        <img alt='' className='cam' src={product?.image}/>
                        </div>
                        <div style={{width:'11.625rem', maxWidth:'15vw', height:'10.145rem', maxHeight:'18vh', marginBottom:'1rem',display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#f5f5f5'}}>
                        <img alt='' className='cam' src={product?.image}/>
                        </div>
                    </div>
                    <div style={{width:'37.5rem', height:'43.75rem', maxWidth:'40vw',maxHeight:'70vh', marginBottom:'1rem',display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#f5f5f5'}}>
                    <img alt='' className='kim' src={product?.image}/>
                    </div>
                </div>
                <div style={{width:'30rem', gap:'2.5rem', display:'flex', flexDirection:'column'}}>
                    <h2 style={{letterSpacing:'5%', fontSize:'2rem', fontWeight:'600'}}>{product?.name}</h2>
                    <h3 style={{letterSpacing:'5%', fontSize:'1.5rem', fontWeight:'lighter'}}>$ {product?.price}</h3>
                    <p style={{fontWeight:'lighter', fontSize:'1rem'}}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <hr style={{border:'1px solid rgb(217, 207, 207)'}} />
                    <div style={{display:'flex', alignItems:'center'}}>
                        <p style={{marginRight:'1.25rem', fontSize:'1.25rem'}}>Size:</p>
                        <div style={{display:'flex', gap:'0.5rem'}} className='word-text'>
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                        </div>
                    </div>
                    <div className='sell'>
                        {!storeContext?.cartItem[product._id]
                            ?
                            <div className='dove'>
                                <div style={{width:'2.5rem', height:'2.5rem', border:'1px solid black', borderRadius:'2px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <img alt='' src={minus}/>
                                    </div>
                                <p>{0}</p>
                                <div style={{width:'2.5rem', height:'2.5rem', border:'1px solid black', borderRadius:'2px', backgroundColor:'#DB4444', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img alt='' src={plus} onClick={()=> storeContext?.addToCart(product._id)}/>
                                </div>
                            </div>
                            :
                            <div className='dove'>
                                <div style={{width:'2.5rem', height:'2.5rem', border:'1px solid black', borderRadius:'2px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img alt='' src={minus} onClick={() => storeContext.removeFromCart(product._id)}/>
                                </div>
                                <p>{storeContext.cartItem[product._id]}</p>
                                <div style={{width:'2.5rem', height:'2.5rem', border:'1px solid black', borderRadius:'2px', backgroundColor:'#DB4444', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img alt='' src={plus} onClick={() => storeContext.addToCart(product._id)}/>
                                </div>
                            </div>
                        }
                        <button onClick={() => {navigate('/cart')}}>Buy Now</button>
                        <div className='man'>
                            <img alt='' src={heart} onClick={() => storeContext?.addToLike(product._id)}/>
                        </div>
                    </div>
                    <div className='free'>
                        <div className='free-top'>
                            <img alt='' src={cars}/>
                            <div >
                                <h6>Free Delivery</h6>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr style={{border:'1px solid rgb(217, 207, 207)'}}/>
                        <div className='free-top'>
                            <img alt='' src={recycle}/>
                            <div >
                                <h6>Return Delivery</h6>
                                <p>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'5rem'}}>
                <div className='best-title'>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'1rem', marginBottom:'1.25rem'}}>
                        <img alt='' src={orange} style={{width:'1.25rem', height:'2.5rem'}} />
                        <p style={{color:'#db4444', fontSize:'1rem', fontWeight:'500'}}>Related Item</p>
                    </div>
                </div>
                <div className='best-component'>
                    {
                    Dean?.map((item, index) => {
                    return(
                    <Product key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} Tier='products'/>
                    )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail