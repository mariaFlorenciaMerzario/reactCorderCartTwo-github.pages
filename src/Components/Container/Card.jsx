import './Card.css';
import React, { useEffect, useState } from "react";
import ItemCount from './ItemCount/ItemCount';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {collection, doc, getDoc} from "firebase/firestore";
import Modal from 'react-modal';
import {db} from "../../firebase/config"
import 'react-tooltip/dist/react-tooltip.css'
import { getProductById } from '../../json';
import { NavLink } from 'react-router-dom';
import ProductList from './Products';


const Card = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);
  let id = props.id
 /*useEffect(()=>{
  console.log('params')
  console.log(props.id)
      getProductById(props.id)
      .then(response =>{
        setProduct(response)
      })
      .catch(error =>{
        console.error(error)
      })
  }, [])*/

  useEffect(()=>{
    console.log('params')
    console.log(id)
      
        const docRef = doc(db, "productos", id );
        getDoc(docRef)
        .then((resp) =>{
          setProduct(
            {
              ...resp.data(), id: resp.id
          })
        })    
    }, [])

  function openModal() {
    console.log('product')
    console.log(product)
    if(product != null){
      setIsOpen(true);
    }
  }
  function closeModal() {
    setIsOpen(false);
  }
    return(
      <div id="card" className="card m-1"style={{width: '300px'}}>
          <div className="card-body " id='yourAppElement'>
          <img src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
            <p className="h4">{props.name} </p > 
            <p>${props.price}.-</p> 
           <div className='d-flex justify-content-center'>
      </div>
    </div>
   
      {/* <button className='btn btn-dark w-75 m-auto my-3' onClick={() => openModal()}>Ver mas</button>
        {modalIsOpen && <ItemDetail{...product } stock={10}/>} */}
      { <NavLink to={`/productList/${props.id}`} className="btn btn-dark m-3">Ver más</NavLink> }
     {/* {<ItemDetail{...product } stock={10}/>} */}
  </div>
    )
}
export default Card