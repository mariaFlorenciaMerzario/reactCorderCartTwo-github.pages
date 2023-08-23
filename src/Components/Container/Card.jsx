import './Card.css';
import ItemCount from './ItemCount/ItemCount';

const Card = (props) => {
    return(
      
      <div className="card m-1"style={{width: '300px'}}>
        <div className="card-body">
       
        <img src={require('../Assets/'+props.image)} style={{width: '150px'}}alt={props.name}/>
            <p className="h4">{props.name} </p > 
            <p>${props.price}.-</p> 
            <p>{props.description}</p>
           <div className='d-flex justify-content-center'>
      </div>
          <ItemCount />  
          
        </div>
      </div>
   
    )
}
export default Card