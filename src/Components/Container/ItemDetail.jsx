import React, { useContext } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'

const ItemDetail = ({id, name, price, description, image, category , stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{
        const item = {
            id, name, price 
        }
        setQuantityAdded(quantity)
        addItem(item, quantity)
    }
    return(
     <>
        <div className='d-flex'>
            <img className="mx-4 vertical-align-center" src={require('../Assets/'+image)} style={{width: '150px'}}alt={name}/>
            <h2>{name}</h2>
            </div>
            <div className='m-4'>
            <p>{description}</p>
            <p>Precio: ${price}.-</p>
            {
                quantityAdded >0 ?(
                    <Link to= '/cart' className='btn btn-success'>Terminar la compra</Link>
                ):(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
         </div>
    </>
    )
}
export default ItemDetail

 