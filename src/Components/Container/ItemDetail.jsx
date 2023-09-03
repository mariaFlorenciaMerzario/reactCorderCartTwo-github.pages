import React from 'react'

const ItemDetail = (props) => {
    return(
     <>
        <div className='d-flex'>
            <img className="mx-4 vertical-align-center" src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
            <h2>{props.name}</h2>
            </div>
            <div className='m-4'>
            <p>{props.description}</p>
            <p>Precio: ${props.price}.-</p>
         </div>
    </>
    )
}
export default ItemDetail

 