import React from 'react'
import { createContext, useState } from 'react'

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
            console.log('El producto ya se encuentra en el carrito')
        }
    }
    const removeItem = (itemId) =>{
        let total=0
        const cartUpdated = cart.filter(prod =>prod.id !== itemId)
        setCart(cartUpdated)
        cartUpdated.map(function(prod) {
            
            total = total + parseInt(prod.quantity)
          });
       
      setTotalQuantity(total)
    }
    

    const setQuantityAdded = (quantity) =>{
        setTotalQuantity(quantity + totalQuantity)
    }

    const clearCart = () =>{
        setCart([])
    }
    const isInCart =(itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    const editCart =(itemId, quantityData) =>{
        
        cart2 = cart.filter((element) => {
            if(element.id === itemId){   
              element.quantity = quantityData
             setCart(cart2)
             console.log('cart2')
             console.log(cart)
            }
         
      // cart.filter(el => el.id !== itemId)
        })
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, setQuantityAdded, editCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}