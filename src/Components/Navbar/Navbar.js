import FormSearchNav from "./FormSearchNav"
import Logo from "./Logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return(
     
        <div className="m-4 row d-flex align-items-center justify-content-around">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around m-2">
             <a className="navbar-brand" href="#"><Logo/></a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav m-auto">
                   <button className="btn btn-warning mx-3">Hacé tu pedido</button> 
                   <button className="btn btn-dark">Productos</button> 
                   <button className="btn btn-dark mx-2">Promos</button> 
                </div>
                    <div className="m-5 fontAwesomeIconCart"><FontAwesomeIcon icon={faCartPlus} /></div>
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