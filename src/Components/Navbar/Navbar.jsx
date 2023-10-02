import Navbarnav from '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import FormSearchNav from "./FormSearchNav"
import Logo from "./Logo"
//import Cart from '../Cart/Cart'
import Button from '../Container/button/Button'
import {NavLink, Link} from 'react-router-dom'
import { createContext, useContext, useState } from 'react'
import { CartContext} from "../../Context/CartContext"

const Navbar = () => {
    const {cart}= useContext(CartContext)
    const {clearCart}= useContext(CartContext)

    return(
     
        <div className="m-5 margin-botom-5 row d-flex align-items-center justify-content-around">
            <nav className="mx-5 navbar navbar-expand-lg navbar-light d-flex justify-content-around m-2 banner">
                <Link to={'/'} className="navbar-brand m-3" href="#"><Logo/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav m-auto">

                        <NavLink to={'/'} className="btn btn-warning">Nuestros Productos</NavLink>
                        <NavLink to={'/category/CarnePollo'} className="btn btn-dark mx-3">Carne y Pollo</NavLink>
                        <NavLink to={'/category/JamonCapresse'} className="btn btn-dark mx-3">Jamón y Queso - Capresse</NavLink>
                        <NavLink to={'/category/Premiun'} className="btn btn-dark">Premiun</NavLink>

                    </div>

                        <Link to={'/cart'}>
                            <CartWidget quantity="1" textWite="text-white"/>
                            {cart.length >0?<button className='btn btn-warning m-2' onClick={clearCart}>Vaciar carrito</button>:null}
                        </Link>
                        
                </div>
                {/* <a className="aCart" onclick="$('#modal').modal({ show:true }),mostrarCarrito()">
                    <ion-icon className="cart" name="cart-outline" id="cartNav"></ion-icon>
                </a>  */}
            </nav>
            <FormSearchNav />
        </div>
        
       
    )
}
export default Navbar