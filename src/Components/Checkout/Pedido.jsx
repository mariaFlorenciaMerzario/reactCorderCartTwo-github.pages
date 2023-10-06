import React, { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import {db} from "../../firebase/config"
import { useParams } from "react-router-dom"
import { OrderContext} from '../../Context/OrderContext'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';


const Pedidos = () => {
  const {clearOrder}= useContext(OrderContext)
let {pedidoId} = useParams();
const [pedido, setPedidos] = useState({});

useEffect(()=>{
const docRef = doc(db, "pedidos", pedidoId );
getDoc(docRef)
.then((resp) =>{
setPedidos(
{ ...resp.data(), id: resp.id})})
}, [pedidoId])
console.log(pedido)

return(
  <div className="d-flex justify-content-center">
<div id="card" className="card m-1"style={{width: '500px'}}>
<div className="card-body " id='yourAppElement'>
<p>Nombre:{pedido?.buyer?.name} </p >
<p>Email:{pedido?.buyer?.email}</p>
<p>Nro contacto:{pedido?.buyer?.ws}</p>
<table className="table">
  <thead className="thead-dark">
  <tr>
    <th>Producto</th>
    <th>Cantidad</th>
    <th>Precio Unit</th>
    <th>Subtotal</th>
  </tr>
  </thead>
<tbody>
{pedido.items && pedido?.items?.map((element, index) => (
<tr key={index}>
<td>{element.name}</td>
<td>{element.quantity}</td>
<td>${element.price}</td>
<td>${element.price * element.quantity}</td>
</tr>

))}
</tbody> 
</table>
<hr></hr>
<p><strong>Precio total ${pedido?.priceTotal}.-</strong></p>
</div>
</div>
</div>
)
}
<NavLink to={'/'} className="btn btn-success m-4"  >Volver a Comprar</NavLink>


export default Pedidos