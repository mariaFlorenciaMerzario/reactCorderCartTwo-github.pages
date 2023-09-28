import Button from "../button/Button"
import { useContext, useState } from "react"
import { CartContext} from "../../../Context/CartContext"
import { StockContext} from "../../../Context/StockContext"


const ItemCount = ({initial, onAdd}) => {
    
    const [quantity, setQuantity]= useState(initial)
    //const [stock, setStock]= useState(10)
    const {stock}= useContext(StockContext)
    const {restaStock}= useContext(StockContext)
    const {sumaStock}= useContext(StockContext)
    const {sinStock}= useContext(StockContext)
    const {setSinStock}= useContext(StockContext)
    const {setStock}= useContext(StockContext)
    
    
    const increment =()=>{
        console.log('stock en itemCount')
        restaStock()
        if(sinStock !== true){
            if(quantity <25){
            setQuantity(quantity+1)
                console.log(stock)
            }else{
                alert("La cantidad del producto excede nuestro stock")
            }
        }else{
            alert("Sin stock del producto")
            setSinStock(true)
        }
    }
    const decrement =()=>{ 
        console.log('stock en itemCount decrement')
        sumaStock()
        if(sinStock !== true){
            console.log('quantity en decrement')
            console.log(quantity)
            if(quantity >=2){
                setQuantity(quantity-1)    
            }else{
                alert("La cantidad no puede ser menor a 1")
            }
        }else{
            alert("Sin stock del producto")
            setSinStock(false)
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