const Button = (props) => {
    return(
       <button className= {props.class} id={props.id}>{props.value}</button>
    )
}
export default Button