import './Card.css';
import React from "react";
import ItemCount from './ItemCount/ItemCount';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from 'react-modal';
import ReactDOM from 'react-dom';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.querySelector('.card'));


const Card = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    return(
      <div className="card m-1"style={{width: '300px'}}>
        <div className="card-body " id='yourAppElement'>
        <img src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
      
       <button 
          
           onClick={openModal}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Ver más" 
            className='verMas'>
              <FontAwesomeIcon className="mx-2" icon={faMagnifyingGlass} />
       </button>

      
      <Tooltip 
        id="my-tooltip" 
        place="right"
        type="info"
        effect="float"
      />

       {/* <Tooltip data-tooltip-id="my-tooltip" data-tooltip-content="Hello mundo!">
        este es el mensaje mio
       </Tooltip> */}
            <p className="h4">{props.name} </p > 
            <p>${props.price}.-</p> 
           <div className='d-flex justify-content-center'>
      </div>
          <ItemCount initial={0} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada' , quantity)}/>    
        </div>
        <Modal
          isOpen={modalIsOpen}
        //  onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
        <div>
              <div className='d-flex'>
                <img className="mx-4 vertical-align-center" src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
                <h2>{props.name}</h2>
              </div>
              <div className='m-4'>
                <p>{props.description}</p>
                <p>Precio: {props.price}</p>
                <ItemCount/><button onClick={closeModal} className='btn btn-dark'>Volver atrás</button>
             </div>
        </div>
       
      </Modal>
      </div>
   
    )
}
export default Card