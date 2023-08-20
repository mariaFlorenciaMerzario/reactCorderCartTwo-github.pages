import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  return (
    <div className="m-5 fontAwesomeIconCart text-white"><FontAwesomeIcon icon={faCartPlus} />{props.quantity}</div>

  )
}

export default Cart