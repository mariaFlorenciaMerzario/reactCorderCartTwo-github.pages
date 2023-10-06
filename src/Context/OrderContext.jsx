import React from 'react'
import { createContext, useState } from 'react'
import { CartContext} from "../Context/CartContext"
import { useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
export const OrderContext = createContext({
    order:[]
})


export const OrderProvider = ({children}) =>{
    const [order, setorder] = useState([])
    const [pedidoId, setPedidoId] = useState('')
    const {cart}= useContext(CartContext)
    const {clearCart}= useContext(CartContext)

   /* const addOrder = (userData)=>{
        let pedido = {
        // orderNro : parseInt(Math.random()*1000),
         buyer: userData,
         items: cart,
         priceTotal: cart.reduce((obj, data) => {obj += data.price * data.quantity; return obj; }, 0)
    }

    const pedidosRef = collection(db, "pedidos")
    addDoc(pedidosRef, pedido)
        .then((doc) =>{
            setPedidoId(doc.id)
            clearCart()

        })
    }
    const clearOrder = () =>{
        setorder([]) 
    }
   
  /* const sendOrder =() =>{
    
    let precioTotal= cart.reduce((obj, data) => {obj += data.price * data.quantity; return obj; }, 0)
     order ={
        //orderNro : parseInt(Math.random()*1000),
        buyer: userData,
        items: cart,
        priceTotal: precioTotal
    }
}*/

 
    return(
        <OrderContext.Provider value={{order, setorder, pedidoId, setPedidoId}}>
        {/* <OrderContext.Provider value={{order, addOrder, setorder, pedidoId, setPedidoId, clearOrder}}> */}
            {children}
        </OrderContext.Provider>
    )
    
}
//const db = getFirestone();
//const orderCollection = collection(db, "orders")
//addDoc(ordersCollection, order).then(({id}) =>setOrderId(id))
