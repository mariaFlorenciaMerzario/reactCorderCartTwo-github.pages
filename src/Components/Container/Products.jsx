import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';

import { getProductById } from '../../json';
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap';
const ProductList = () => {
    let {productId} = useParams()
    const [product, setProduct] = useState(null)
    
    useEffect(()=>{
        getProductById(productId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])

    return(
    <>
    {product!= null?
    <ItemDetail{...product } stock={10}/>:<Spinner/>}
   
    </>
  )
}

export default ProductList