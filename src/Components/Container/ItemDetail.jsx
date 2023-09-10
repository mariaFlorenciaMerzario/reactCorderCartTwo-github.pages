import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount/ItemCount'
const ItemDetail = (props) => {
const {quantityAdded, setQuantityAdded} = useState(0)

const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)
    
}
    return(
     <>
        <div className='d-flex'>
            <img className="mx-4 vertical-align-center" src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
            <h2>{props.name}</h2>
            </div>
            <div className='m-4'>
            <p>{props.description}</p>
            <p>Precio: ${props.price}.-</p>
            {
                quantityAdded >0 ?(
                    <Link to= '/cart' className='Option'>Terminar la compra</Link>
                ):(
                    <ItemCount initial={1} stock={props.stock} onAdd={handleOnAdd}/>
                )
            }
         </div>
    </>
    )
}
export default ItemDetail

 