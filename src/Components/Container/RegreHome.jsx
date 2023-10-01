import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const RegreHome = () => {
  return (
    <tr className='d-flex justify-content-center col-12'>
        <td className="d-flex flex-column justify-center m-4">El carrito está vacío
        
          <NavLink to={'/'}>
            <button className='btn btn-success m-2'>Volver al listado de productos</button>
          </NavLink>
        </td>
     </tr>
  )
}

export default RegreHome

