import CartWidget from "../CartWidget/CartWidget"
import FormSearchNav from "./FormSearchNav"
import Logo from "./Logo"
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
                   <button className="btn btn-warning m-2">Hacé tu pedido</button> 
                   <button className="btn btn-dark m-2">Productos</button> 
                   <button className="btn btn-dark m-2">Promos</button> 
                </div>
                    {/* <div className="m-5 fontAwesomeIconCart"><FontAwesomeIcon icon={faCartPlus}/>1</div> */}
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