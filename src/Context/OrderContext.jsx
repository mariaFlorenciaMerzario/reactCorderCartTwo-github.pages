import React from 'react'
import { createContext, useState } from 'react'
import { CartContext} from "../Context/CartContext"
import { useContext } from 'react';
export const OrderContext = createContext({
    order:[]
})

export const OrderProvider = ({children}) =>{
    const [order, setorder] = useState([])
    const {cart}= useContext(CartContext)

    const addOrder = (userData)=>{
        let oneOrder = {
         orderNro : parseInt(Math.random()*1000),
         buyer: userData,
         items: cart,
         priceTotal: cart.reduce((obj, data) => {obj += data.price * data.quantity; return obj; }, 0)
    }
    setorder(oneOrder)
    console.log('oneOrder')
    console.log(oneOrder)
}
    /*const isInCart =(itemId) =>{
        if (!Array.isArray(cart)) {
            throw new Error('cart no es un array');
          }
          return cart.some(prod => prod.id === itemId);
    }*/
    return(
        <OrderContext.Provider value={{order, addOrder, setorder}}>
            {children}
        </OrderContext.Provider>
    )
}
