import React, { useContext } from 'react'
import { CartContext} from "../Context/CartContext"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import ItemModif from './Container/ItemCount/ItemMod'
import RegreHome from './Container/RegreHome'
import { NavLink } from 'react-router-dom'
import ItemDetailCss from './Container/ItemDetail.css'
const Cart = (onAdd) => {
    let total=0
    const {cart}= useContext(CartContext)
    const {removeItem}= useContext(CartContext)

   
    
  return (
  <>
<table className="table mtop5">
  <thead className="thead-light">
{cart.length != 0?
    <tr className='displayNone'>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Eliminar</th>
    </tr>
:''}
  </thead>
  <tbody>
    
     {cart.length >0?
      cart.map((item, index) => (
     <tr key={index} className='my-4 d-flexColumnSm flexColumnSm'>
        <td className="d-none" ></td>
        <td>{item.name}</td>
        <td><ItemModif quantityItem={item.quantity} id={item.id}/></td>
        <td><span className='dNonePc'>Precio</span>${item.price}</td>
        <td><span className='dNonePc'>Total</span> ${item.price*item.quantity}</td>
        <td className='d-none'>{total = item.price * item.quantity + total} </td>
        <td><button className="border-0" onClick={()=>removeItem(item.id)}><FontAwesomeIcon className="text-danger" icon={faTrashCan}/></button></td>
    </tr>
    ))
    :<RegreHome/>
  }
    </tbody>
</table>
{cart.length != 0?
   <> 
    <p className='h3'>Total: ${total}</p>
    <NavLink to={'/checkout'} className="btn btn-success mx-3">Checkout</NavLink>
                      
    </>
   :''}
    </>
  )
  
}

export default Cart