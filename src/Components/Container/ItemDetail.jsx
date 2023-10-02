import React, { useContext } from 'react'
import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount/ItemCount'
import {CartContext} from '../../Context/CartContext'
import ItemDetailCss from '../Container/ItemDetail.css'

import { useParams } from 'react-router-dom'
const ItemDetail = ({id, name, price, description, image, quantity , stock}) => {
console.log('stock')
console.log(stock)
    const productIt = useParams
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem}= useContext(CartContext)
    //     
    const handleOnAdd = (quantity) =>{
        const item = {
            id, name, price 
        }
        setQuantityAdded(quantity)
         addItem(item, quantity)
    }

    return(
     <>
        <div className='d-flex justify-content-center'>
            <img className="mx-4 vertical-align-center" src={require('../Assets/'+image)} style={{width: '150px'}}alt={name}/>
            <h2>{name}</h2>
            </div>
            <div className='m-4'>
            <p>{description}</p>
            <p>{quantity}</p>
            <p>Precio: ${price}.-</p>  
            {   
                quantityAdded >0 ?(
                    <Link to={'/cart'} className='btn btn-success'>Terminar la compra</Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                    <NavLink to={'/'} className="btn btn-warning">Volver al listado de productos</NavLink>
              </div>
       
    </>
    )
}
export default ItemDetail