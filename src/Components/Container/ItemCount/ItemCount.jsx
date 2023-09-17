import Button from "../button/Button"
import { useState } from "react"
import { CartContext} from "../../../Context/CartContext"
const ItemCount = ({stock, initial, onAdd}) => {
  
    const [quantity, setQuantity]= useState(initial)
    const increment =()=>{

        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement =()=>{
        if(quantity > 0){
           
            setQuantity(quantity-1)
        }
    }
    return(
       <>
        <div>
            <Button class='btn btn-light' id="btnMinQuantity" value='-1' onClick={decrement}/>
            <span className="m-4">{quantity}</span>
            <Button class='btn btn-light' id="btnAddQuantity" value='+1' onClick={increment}/>
        </div>
            <Button onClick={()=> onAdd(quantity)} quantty={quantity} disabled={!stock} class='btn btn-warning m-2' value='Agregar al Carrito'/>
       </>
    )
}
export default ItemCount