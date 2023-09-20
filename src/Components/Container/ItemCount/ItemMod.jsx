import Button from "../button/Button"
import { useState } from "react"
import { CartContext} from "../../../Context/CartContext"
import React, { useContext } from 'react'

const ItemModif = ({stock, initial, onAdd, quantityItem, id}) => {

    const {editCart}= useContext(CartContext)
    let [quantity, setQuantity]= useState(quantityItem)
    let increment =()=>{
            setQuantity(quantity++)
            editCart(id, quantity)
            console.log("se edito el cart cantidad ++")
            
    }

    let decrement =()=>{
        if(quantity > 0){ 
            setQuantity(quantity--)
            editCart(id, quantity)
            console.log("se edito el cart cantidad --")
        }
    }
    return(
       <>
        <Button class='btn btn-light' id="btnMinQuantity" value='-1' onClick={decrement}/>
        <span className="m-4">{quantity}</span>
        <Button class='btn btn-light' id="btnAddQuantity" value='+1' onClick={increment}/>
     </>
    )
}
export default ItemModif