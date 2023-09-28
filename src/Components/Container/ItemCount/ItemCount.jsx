import Button from "../button/Button"
import { useState } from "react"
import { CartContext} from "../../../Context/CartContext"
const ItemCount = ({initial, onAdd}) => {
  
    const [quantity, setQuantity]= useState(initial)
    const [stock, setStock]= useState(10)
 
    const increment =()=>{
        
        console.log('stock2')
        console.log(stock)
       
        if(quantity < stock){
            if(quantity + 1 <= stock){
                setQuantity(quantity+1)
                setStock(stock-1)
            }else{
                alert("No hay mas stock de este producto")
            }
        }
    }
    const decrement =()=>{
        if(quantity > 1){
           
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
            <Button onClick={()=> onAdd(quantity)} quantity={quantity} disabled={!stock} class='btn btn-warning m-2' value='Agregar al Carrito'/>
       </>
    )
}
export default ItemCount