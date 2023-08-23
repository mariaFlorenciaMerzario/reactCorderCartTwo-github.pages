import Button from "../button/Button"
const ItemCount = (props) => {
    return(
       <>
        <div>
            <Button class='btn btn-light' id="btnMinQuantity" value='-1'/>
            <input name='quantity' className='w-25 m-2 form-control text- d-inline-block'/>
            <Button class='btn btn-light' id="btnAddQuantity" value='+1'/>
        </div>
            <Button class='btn btn-warning m-2' value='Agregar al Carrito'/>
       </>
    )
}
export default ItemCount