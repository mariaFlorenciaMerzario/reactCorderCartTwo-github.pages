import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


const Pedidos = (props) => {
  
    return(
   
      <div id="card" className="card m-1"style={{width: '300px'}}>
          <div className="card-body " id='yourAppElement'>
          
            <p className="h4">{props.name} </p > 
            <p>{props.email}.-</p> 
            <p>{props.ws}.-</p> 
            <p>Precio total compra${props.total}.-</p> 
           <div className='d-flex justify-content-center'>
       Items   
      { {...props.items.map((element, index) => (
        <ul  key={index}>
          <li>{element.name}</li>
          <li>{element.quantity}</li>
          <li>{element.price}</li>
        </ul>
        ))} }
      </div>
\    </div>
   
   
      
  </div>
    )
}
export default Pedidos