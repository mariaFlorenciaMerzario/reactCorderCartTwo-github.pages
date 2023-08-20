import Navbarnav from '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import FormSearchNav from "./FormSearchNav"
import Logo from "./Logo"
import Cart from '../Cart/Cart'

const Navbar = () => {
    return(
     
        <div className="m-4 row d-flex align-items-center justify-content-around">
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around m-2 banner">
        
             <a className="navbar-brand" href="#"><Logo/></a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav m-auto">
                   <button className="btn btn-warning m-2">Hacé tu pedido</button> 
                   <button className="btn btn-dark m-2">Productos</button> 
                   <button className="btn btn-dark m-2">Promos</button> 
                </div>
               <Cart quantity="1"/>
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