import image from '../Assets/argentinas.jpg' 

const Card = () => {
    return(
      
      <div className="card w-25">
        <div className="card-body">
            <img className="card-img-top"src={image} alt="saraza"></img>
            <p className="h4">Empanada </p> 
        </div>
      </div>
   
    )
}
export default Card