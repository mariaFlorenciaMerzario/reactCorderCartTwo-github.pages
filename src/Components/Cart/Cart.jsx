import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  return (
    <div className="fontAwesomeIconCart text-white"><FontAwesomeIcon icon={faCartPlus} />{props.quantity}</div>

  )
}

export default Cart