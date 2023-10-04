import React from 'react'
import { createContext, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({
    cart:[]
})

export const CarProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
     let cart2 = []

    const addItem = (item, quantity)=>{
       
        if(!isInCart(item.id)){
            setCart(prev =>[...prev,{...item, quantity}])
            setTotalQuantity(quantity + totalQuantity)
       }else{
        toast('El producto ya se encuentra en el carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
        });
            
        }
    }
    const removeItem = (itemId) =>{
        let total=0
        const cartUpdated = cart.filter(prod =>prod.id !== itemId)
        console.log('cartUpdated')
        console.log(cartUpdated)
        
        if(cartUpdated.length >0){
            setCart(cartUpdated)
            cartUpdated.map(function(prod) {   
                total = total + parseInt(prod.quantity)
            });
        }else{
            setCart([])
        }
       
      setTotalQuantity(total)
    }
    
    const setQuantityAdded = (quantity) =>{
        setTotalQuantity(quantity + totalQuantity)
    }

    const clearCart = () =>{
        setCart([])
        setTotalQuantity(0)
    }
    const isInCart =(itemId) =>{
        if (!Array.isArray(cart)) {
            throw new Error('cart no es un array');
          }
        
          return cart.some(prod => prod.id === itemId);
    }

    const editCart = (itemId, quantityData) => {
        const updatedCart = cart.map((element) => {
            if (element.id === itemId) {
                return { ...element, quantity: quantityData }
               
            } else {
                return element
            }
        })
        setCart(updatedCart)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, setQuantityAdded, editCart,setTotalQuantity, totalQuantity}}>
            {children}
            <ToastContainer></ToastContainer>
        </CartContext.Provider>
    )
}