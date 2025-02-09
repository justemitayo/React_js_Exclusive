import React, { useEffect, useState } from "react";
import { food_list } from "../Demo/Demo.tsx";
import { StoreContext } from "./interface.ts";


const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});
    const [likeItem, setLikeItem] = useState({});

    const addToCart = (termId) => {
        if(!cartItem[termId]){
            setCartItem((prev) => ({...prev,[termId]:1}))
        }
        else{
            setCartItem((prev) => ({...prev,[termId]:prev[termId]+1}))
        }
    }

    const removeFromCart = (termId) =>{
        setCartItem((prev) => ({...prev,[termId]:prev[termId]-1}))
    }
    const addToLike = (termId) => {
        if(!cartItem[termId]){
            setLikeItem((prev) => ({...prev,[termId]:1}))
        }
        else{
            setLikeItem((prev) => ({...prev,[termId]:prev[termId]+1}))
        }
    }

    const removeFromLike = (termId) =>{
        setLikeItem((prev) => ({...prev,[termId]:prev[termId]-1}))
    }

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const term in cartItem)
            {
                if (cartItem[term] >0)
                    {
                        let itemInfo = food_list.find((product) => product._id === term);

                        if(itemInfo){
                            totalAmount += itemInfo.price* cartItem[term];  
                        }else{
                            return(0)
                        }
                                
                    }
            } 
            return(
                totalAmount
            )

    }  

    useEffect (() => {
        console.log(cartItem);
        console.log(likeItem);
        
    }, [cartItem, likeItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        likeItem,
        setLikeItem,
        addToCart,
        removeFromCart,
        addToLike,
        removeFromLike,
        getTotalCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider