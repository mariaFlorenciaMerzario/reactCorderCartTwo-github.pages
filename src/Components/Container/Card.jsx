import './Card.css';
import React, { useEffect, useState } from "react";
import ItemCount from './ItemCount/ItemCount';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from 'react-modal';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { getProductById } from '../../json';
import ItemDetail from './ItemDetail';
import Products from './Products';


const Card = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);
  
 useEffect(()=>{
      getProductById(props.id)
      .then(response =>{
        setProduct(response)
      })
      .catch(error =>{
        console.error(error)
      })
  }, [])

  function openModal() {
    console.log(product)
    if(product != null){
      setIsOpen(true);
      console.log('modalIsOpen despues del setIsOpen')
      console.log(modalIsOpen)
    }
  }
  function closeModal() {
    setIsOpen(false);
  }
    return(
      <div className="card m-1"style={{width: '300px'}}>
          <div className="card-body " id='yourAppElement'>
          <img src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
            <button 
                onClick={()=>{openModal()}}
                data-tooltip-id="my-tooltip" 
                data-tooltip-content="Ver más" 
                className='verMas'>
                <FontAwesomeIcon className="mx-2" icon={faMagnifyingGlass} />
            </button>
          <Tooltip 
            id="my-tooltip" 
            effect="float"
            className='tooltip'
          />
            <p className="h4">{props.name} </p > 
            <p>${props.price}.-</p> 
           <div className='d-flex justify-content-center'>
      </div>
    </div>
        
      { modalIsOpen === true?<Products{...product } stock={10}/>:''}
  </div>
    )
}
export default Card