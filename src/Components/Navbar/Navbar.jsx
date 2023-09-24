import Navbarnav from '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import FormSearchNav from "./FormSearchNav"
import Logo from "./Logo"
//import Cart from '../Cart/Cart'
import Button from '../Container/button/Button'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return(
     
        <div className="m-4 p-4 row d-flex align-items-center justify-content-around">
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around m-2 banner">
                <Link to={'/reactCoder.github.io/build'} className="navbar-brand" href="#"><Logo/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav m-auto">

                        <NavLink to={'/reactCoder.github.io/build'} className="btn btn-warning">Nuestros Productos</NavLink>
                        <NavLink to={'/reactCoder.github.io/build/category/CarnePollo'} className="btn btn-dark mx-3">Carne y Pollo</NavLink>
                        <NavLink to={'/reactCoder.github.io/build/category/JamonCapresse'} className="btn btn-dark mx-3">Jamón y Queso - Capresse</NavLink>
                        <NavLink to={'/reactCoder.github.io/build/category/Premiun'} className="btn btn-dark">Premiun</NavLink>

                    </div>

                        <Link to={'/reactCoder.github.io/build/cart'}>
                            <CartWidget quantity="1" textWite="text-white"/>
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