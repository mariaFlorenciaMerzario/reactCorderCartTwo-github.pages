import React from 'react'
import ItemDetail from './ItemDetail'
import { NavLink } from 'react-router-dom'

const Products = ({product}) => {
  return (
    <>
    {product!= null?<ItemDetail{...product } stock={10}/>:''}
   
    </>
  )
}

export default Products