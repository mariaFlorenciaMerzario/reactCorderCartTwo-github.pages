import React, { useContext } from 'react'
import { CartContext} from "../Context/CartContext"
import { useState, useEffect } from "react"

const Cart = () => {
    const [products, setProducts] = useState([])
    let total=0
    const {cart}= useContext(CartContext)

    
  return (
    <>

<table className="table">
  <thead className="thead-light">
    <tr>
        cart
        {cart}
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
      {cart.map((item, index) => (
     <tr>
        key={index}
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        {/* <td>{item.price}</td>
        <td>{item.price*item.quantity}</td>
        {total = item.price * item.quantity + total} */}
    </tr>
      ))}
     
    
  </tbody>
</table>
    <h3>Total: {total}</h3>
    </>
  )
}

export default Cart