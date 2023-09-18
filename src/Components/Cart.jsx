import React, { useContext } from 'react'
import { CartContext} from "../Context/CartContext"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    let total=0
    const {cart}= useContext(CartContext)
    const {removeItem}= useContext(CartContext)

    
  return (
    <>

<table className="table">
  <thead className="thead-light">
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
      {cart?.map((item, index) => (
     <tr>
         <td className="d-none" key={index}></td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.price*item.quantity}</td>
        <td className='d-none'>{total = item.price * item.quantity + total} </td>
        <td><button className="border-0" onClick={()=>removeItem(item.id)}><FontAwesomeIcon className="text-danger" icon={faTrashCan}/></button></td>
    </tr>
      ))}
    
  </tbody>
</table>
    <p className='h3'>Total: ${total}</p>
    </>
  )
}

export default Cart