import Button from "../button/Button"
import { useState } from "react"
const ItemCount = (props) => {
  
    const [quantity, setQuantity] = useState(props.initial)
    const increment =()=>{
        alert('hola increment')
        if(quantity< props.stock){
            setQuantity(props.quantity+1)
        }
    }
    const decrement =()=>{
        if(quantity< props.stock){
            alert('decrement decrement')
            setQuantity(props.quantity-1)
        }
    }
    return(
       <>
        <div>
            <Button class='btn btn-light' id="btnMinQuantity" value='- 1' onClick={decrement}/>
            <span>{quantity}</span>
            <Button class='btn btn-light' id="btnAddQuantity" value='+ 1' onClick={increment}/>
        </div>
            <Button onClick={()=> props.onAdd(quantity)} disabled={!props.stock} class='btn btn-warning m-2' value='Agregar al Carrito'/>
       </>
    )
}
export default ItemCount