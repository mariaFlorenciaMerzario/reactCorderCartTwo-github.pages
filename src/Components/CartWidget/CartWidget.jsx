import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'  
import{ CartContext} from '../../Context/CartContext'

const CartWidget = (props) => {
    const {totalQuantity} = useContext(CartContext)
    return(
        <div className="m-5 fontAwesomeIconCart text-white"><FontAwesomeIcon icon={faCartPlus}/>{totalQuantity}</div>
    )
}
export default CartWidget