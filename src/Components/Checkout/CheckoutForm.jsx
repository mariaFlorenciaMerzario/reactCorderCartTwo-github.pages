import './Checkout.css';
import React, { useState, useEffect } from 'react'
import { OrderContext} from '../../Context/OrderContext'
import { CartContext} from '../../Context/CartContext'
import { useContext } from 'react';
import BtnCheckout from './BtnCheckout';
import { NavLink } from 'react-router-dom';
import {doc, collection, getFirestone, getDoc, addDoc} from 'firebase/firestore'
import {db} from "../../firebase/config"
import Pedidos from './Pedido';


const CheckoutForm = ({}) => {
    const {addOrder}= useContext(OrderContext)
    const {clearOrder}= useContext(OrderContext)
    const {setorder}= useContext(OrderContext)
    const {clearCart}= useContext(CartContext)
    /*const {pedidoId}= useContext(OrderContext)
    const {setPedidoId}= useContext(OrderContext)*/
    const {order}= useContext(OrderContext)
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailDos, setEmailDos] = useState('')
    const [ws, setWs] = useState('')
    const [responseName, setResponseName] = useState('')
    const [responseEmail, setResponseEmail] = useState('')
    const [responseEmail2, setResponseEmailDos] = useState('')
    const [responseWs, setResponseWs] = useState('')
    const [booleanTxt, setBooleanTxt] = useState(false)
    const [booleanWs, setBooleanWs] = useState(false)
    const [booleanEmail, setBooleanEmail] = useState(false)
    const [booleanEmailDos, setBooleanEmailDos] = useState(false)
    const [pedidoId, setPedidoId] = useState([])
    
    const {cart}= useContext(CartContext)
   /* useEffect(()=>{

    }, [pedidoId])*/
 /*  useEffect(()=>{
      if(pedidoId !== null){
          const docRef = doc(db, "pedidos", pedidoId );
          getDoc(docRef)
          .then((resp) =>{
            setPedidos(
              {
                ...resp.data(), id: resp.id
            })
          })  
        }  
      }, [pedidoId])*/

   /* useEffect(()=>{
      if(pedidoId !== null){
      const docRef = doc(db, "pedidos", pedidoId)
          getDoc(docRef)
          .then((resp) =>{
            console.log('resp')
            console.log(resp.data())
            setPedidos({
              ...resp.data(), id: resp.id })
            })
          }  
      }, [pedidoId])*/
         
    /*function handleFunction(){
    const docRef = collection(db, "pedidos", pedidoId)
    getDoc(docRef)
        .then((resp) =>{
          setPedidos(
            {...resp.data(), id: resp.id})
            setFlat(false)
        })
    }*/
  
    const handleConfirm = (event) =>{
        event.preventDefault();

        const userData = {
            name, ws, email
        }
       
          let pedido = {
           buyer: userData,
           items: cart,
           priceTotal: cart.reduce((obj, data) => {obj += data.price * data.quantity; return obj; }, 0)
      }
  
      const pedidosRef = collection(db, "pedidos")
      addDoc(pedidosRef, pedido)
          .then((doc) =>{
              setPedidoId(doc.id)
              clearCart()
  
          })
      
    }
    const validarTxt = (event) =>{
        const pattern = new RegExp( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
        const inputName = event.target.value;
       
        if(inputName === '') {
            setResponseName('El campo no puede estar vacío')
          } else {
            // Segunda validacion, si input es mayor que 35
            if(inputName.length > 35) {
             
              setResponseName('El campo no puede tener mas de 35 caracteres')
              setBooleanTxt(false)
            } else {
              // Tercera validacion, si input contiene caracteres diferentes a los permitidos
              if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(inputName.trim())){ 
                setResponseName('Caracter inválido')
                setName(inputName)
                setBooleanTxt(false)
              } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                setResponseName('')
                setBooleanTxt(true)
                setName(inputName)
              }
            }
          }
    }

    const validarEmail = (event) =>{
       // const pattern = new RegExp(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/);
       const inputEmail= event.target.value;
       console.log(inputEmail)
        if(inputEmail === '') { 
            setResponseEmail('El campo no puede estar vacío')
          } else {

            // Segunda validacion, si input es mayor que 35
            if(email.length > 35) { 
              setResponseEmail('El campo no puede tener mas de 35 caracteres')
              setBooleanEmail(false)
            } else {
                setEmail(inputEmail)
              // Tercera validacion, si input contiene caracteres diferentes a los permitidos
              let reg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!reg.test(inputEmail)){
              // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
              // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                setResponseEmail('No es un email')
                setBooleanEmail(false)
              }else{
                  setEmail(inputEmail)
                  setBooleanEmail(true)
                  setResponseEmail('')
                }
              }
            }  
          }
            const validarEmailDos = (event) =>{
              // const pattern = new RegExp(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/);
              const inputEmailDos= event.target.value;
             
               if(email !== inputEmailDos) { 

                  setEmailDos(inputEmailDos)
                  setResponseEmailDos('El mail no coincide')
                  setBooleanEmailDos(false)
                 }else{
                  setEmailDos(inputEmailDos)
                  setBooleanEmailDos(true)
                  setResponseEmailDos('')
                 }
           }

    const validarNumber = (event) =>{
      const inputWs= event.target.value;
      if(inputWs === '') { 
        setResponseWs('El campo no puede estar vacío')
      } else {

        // Segunda validacion, si input es mayor que 35
        if(inputWs.length > 35) { 
          setResponseWs('El campo no puede tener mas de 10 caracteres')
        } else {
            setWs(inputWs)
          // Tercera validacion, si input contiene caracteres diferentes a los permitidos
          let reg = /^[0-9]*$/;
          if (!reg.test(inputWs)){
          // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
          // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
            setResponseWs('No es un valor numérico')
          }else{
            setResponseWs('Faltan ingresar algunos valores mas')
            if(inputWs.length === 10){
              setWs(inputWs)
              setBooleanWs(true)
              setResponseWs('')
            }else{
              setResponseWs('El campo debe contener un máximo de 10 caracteres')
              setBooleanWs(false)
            }
            }
          }
        }
    }

console.log(pedidoId.length>0)
    if(pedidoId.length>0){
      return(
        <>
        <h2 className='p-4'>Muchas gracias realizar por su compra</h2>
        <div className='bg-warning rounded w-25 m-auto p-3'>Su código de orden es: <strong>{pedidoId}</strong></div>
        { <NavLink to={`/pedido/${pedidoId}`} className="btn btn-dark text-light m-4">Ver detalle</NavLink> }
       
        {/* <NavLink to={'/'} className="btn btn-success m-4" onClick={clearOrder} >Volver a Comprar</NavLink> */}
        </>
        )
    }
    return (
        <div className='d-flex flex-column align-self-baseline'>
            <form onSubmit={(e) => handleConfirm(e)} className="form-inline w-50 m-4 " id="searchSelected"  >
                <h2>Orden de pedido</h2>
                 {order.orderNro>0? <BtnCheckout order={order.orderNro}/>:''}  
                    <input
                        className="form-control mr-sm-2 w-75 mx-4 my-2" type="text"
                        placeholder=" Ingresa tu nombre"
                        id="inputName"
                        name='name'
                        value={name}
                        onChange={(event) => validarTxt(event)} 
                    >
                    </input>
                    <p className={ responseName.length >0 ? 'mr-sm-2 w-75 mx-4 pRed' : 'mr-sm-2 w-75 mx-4'}>{responseName}</p>
                
                    <input
                        className="form-control mr-sm-2 w-75 mx-4 my-2" type="text"
                        placeholder=" Ingresa tu whatsapp"
                        id="inputWhatsapp"
                        name='ws'
                        value={ws}
                        onChange={(event) => validarNumber(event)} 
                    >
                    </input>
                    <p className={ responseWs.length >0 ? 'mr-sm-2 w-75 mx-4 pRed' : 'mr-sm-2 w-75 mx-4'}>{responseWs}</p>

                    <input
                        className="form-control mr-sm-2 w-75 mx-4 my-2" type="text"
                        placeholder=" Ingresa tu email"
                        id="inputEmail"
                        name='email'
                        value={email}
                        onChange={(event) => validarEmail(event)} 
                    >
                    </input>

                    
                    <p className={ responseEmail.length >0 ? 'mr-sm-2 w-75 mx-4 pRed' : 'mr-sm-2 w-75 mx-4'}>{responseEmail}</p>


                    <input
                        className="form-control mr-sm-2 w-75 mx-4 my-2" type="text"
                        placeholder=" Ingresa tu email nuevamente"
                        id="inputEmailDos"
                        name='emailDos'
                        value={emailDos}
                        onChange={(event) => validarEmailDos(event)} 
                    >
                    </input>
                    <p className={ responseEmail2.length >0 ? 'mr-sm-2 w-75 mx-4 pRed' : 'mr-sm-2 w-75 mx-4'}>{responseEmail2}</p>


                    {booleanTxt === true && booleanEmail === true && booleanEmailDos === true && booleanWs === true ? <button type="submit" className="btn btn-success m-3">Confirmar</button>:
                  <button type="submit" className="disabled btn btn-dark">Confirmar</button>}
            </form>
           
        </div>
    )
}

export default CheckoutForm