import React from 'react'
import { createContext, useState } from 'react'
import { CartContext} from "../Context/CartContext"
import { useContext } from 'react';
export const OrderContext = createContext({
    order:[]
})

export const OrderProvider = ({children}) =>{
    const [order, setorder] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const {cart}= useContext(CartContext)


    const addOrder = (userData)=>{
      
        let orderNro = Math.random()
        console.log(orderNro)
        console.log('contenido del cart')
        console.log(cart)
        
    }
    /*const isInCart =(itemId) =>{
        if (!Array.isArray(cart)) {
            throw new Error('cart no es un array');
          }
          return cart.some(prod => prod.id === itemId);
    }*/
    return(
        <OrderContext.Provider value={{order, addOrder}}>
            {children}
        </OrderContext.Provider>
    )
}
