import './Card.css';
import Button from './button/Button';
const Card = (props) => {
    return(
      
      <div className="card m-1"style={{width: '300px'}}>
        <div className="card-body">
        <img src={props.image} alt={props.name}/>
            <p className="h4">{props.name} </p> <p>${props.price}.-</p> 
           <div className='d-flex justify-content-center'>

              <Button class='btn btn-warning' id="btnAddQuantity" num='+1'/>
            
              <input name='quantity' className='w-25 m-2 form-control'/>
              <Button class='btn btn-secondary' id="btnMinQuantity" num='-1'/>
             </div>
              <Button class='btn btn-dark m-2' num='Agregar al Carrito'/>
        </div>
      </div>
   
    )
}
export default Card