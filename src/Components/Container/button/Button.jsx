
const Button = (props) => {
    return(
       <button className= {props.class} id={props.id} onClick={props.onClick}>{props.value}</button>
    )
}
export default Button