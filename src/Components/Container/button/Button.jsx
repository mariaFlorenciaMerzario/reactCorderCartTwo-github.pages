const Button = (props) => {
    return(
       <button className= {props.class} id={props.id}>{props.num}</button>
    )
}
export default Button