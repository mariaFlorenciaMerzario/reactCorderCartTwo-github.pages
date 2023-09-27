
import React from 'react'
import { CartContext} from '../../Context/CartContext'
import { useContext } from 'react';

const BtnCheckout = (props) => {
  const {clearCart}= useContext(CartContext)
  return (
    <>
    <div className="bg-warning w-25 m-auto border-rounded" >
       Se generó la orden nro {props.order}
    </div>
    </>
  )
}

export default BtnCheckout