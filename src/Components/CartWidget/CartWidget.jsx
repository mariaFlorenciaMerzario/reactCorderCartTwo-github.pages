import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CartWidget = (props) => {
    return(
        <div className="m-5 fontAwesomeIconCart text-white"><FontAwesomeIcon icon={faCartPlus}/>{props.quantity}</div>
    )
}
export default CartWidget