import Button from "../button/Button"
import { useContext, useState } from "react"
import { CartContext} from "../../../Context/CartContext"
import { StockContext} from "../../../Context/StockContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                
                toast('Sin stock del producto', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                });
            }
        }else{
            toast('Sin stock del producto', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
            });
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
                toast('La cantidad no puede ser menor a 1', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                });
            }
        }else{
            toast('Cantidad no disponible', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
            });
         
            setSinStock(false)
        }
    }
    return(
       <>
        <div>
            <Button class='btn btn-light' id="btnMinQuantity" value='-1' onClick={decrement}/>
            <span className="m-4">{quantity}</span>
            <Button class='btn btn-light' id="btnAddQuantity" value='+1' onClick={increment}/>
            <ToastContainer></ToastContainer>
        </div>
            <Button onClick={()=> onAdd(quantity)} quantity={quantity} disabled={!stock} class='btn btn-warning m-2' value='Agregar al Carrito'/>
       </>
    )
}
export default ItemCount