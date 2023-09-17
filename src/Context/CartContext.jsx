import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart:[]
})

export const CarProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev =>[...prev,{...item, quantity}])
        }else{
            console.log('El producto ya se encuentra en el carro')
        }
    }
    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod =>prod.id !== itemId)
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

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, setQuantityAdded, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CarProvider