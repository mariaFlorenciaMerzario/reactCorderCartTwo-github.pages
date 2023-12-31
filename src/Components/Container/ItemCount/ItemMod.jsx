import Button from "../button/Button"
import { useState } from "react"
import { CartContext} from "../../../Context/CartContext"
import React, { useContext } from 'react'
import { StockContext} from "../../../Context/StockContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemModif = ({initial, onAdd, quantityItem, id}) => {

    const {stock}= useContext(StockContext)
    const {restaStock}= useContext(StockContext)
    const {sumaStock}= useContext(StockContext)
    const {sinStock}= useContext(StockContext)
    const {setSinStock}= useContext(StockContext)
    const {setStock}= useContext(StockContext)

    const {editCart}= useContext(CartContext)
    const {setTotalQuantity, totalQuantity}= useContext(CartContext)
    let [quantity, setQuantity]= useState(quantityItem)
   
   
    const increment =()=>{
        console.log('stock en itemCount')
        restaStock()
        if(sinStock !== true){
            console.log('quantity en item modif arriba del ir')
            console.log(quantity)
            if(quantity <25){
                setQuantity(quantity+1)
                editCart(id, quantity +1)
                setTotalQuantity(totalQuantity +1)
                console.log("se edito el cart cantidad ++")
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

   
   /* let increment =()=>{
        if(!restaStock()){

            setQuantity(quantity+1)
            editCart(id, quantity +1)
            setTotalQuantity(totalQuantity +1)
            console.log("se edito el cart cantidad ++")
        }   
    }
*/

const decrement =()=>{ 
   
    if(!sumaStock()){
        if(quantity > 1){ 
            setQuantity(quantity-1)
            editCart(id, quantity -1)
            setTotalQuantity(totalQuantity -1)
            console.log("se edito el cart cantidad --")
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
        toast('La cantidad no puede ser menor a 1', {
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
}
  /*  let decrement =()=>{
        if(!sumaStock()){

            if(quantity > 1){ 
                setQuantity(quantity-1)
                editCart(id, quantity -1)
                setTotalQuantity(totalQuantity -1)
                console.log("se edito el cart cantidad --")
            }
        }
    }*/

    return(
       <>
        <Button class='btn btn-light' id="btnMinQuantity" value='-1' onClick={decrement}/>
        <span className="m-4">{quantity}</span>
        <Button class='btn btn-light' id="btnAddQuantity" value='+1' onClick={increment}/>
        <ToastContainer></ToastContainer>
     </>
    )
}
export default ItemModif