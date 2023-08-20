import './Card.css';
const Card = (props) => {
    return(
      
      <div className="card w-20 m-1">
        <div className="card-body">
        <img src={props.image} alt={props.name}/>
            <p className="h4">{props.name} ${props.price}.-</p> 
        </div>
      </div>
   
    )
}
export default Card