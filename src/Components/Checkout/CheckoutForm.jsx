import React, { useState } from 'react'
import './Checkout.css';


const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ws, setWs] = useState('')
    const [responseName, setResponseName] = useState('')
    const [responseEmail, setResponseEmail] = useState('')
    const [responseWs, setResponseWs] = useState('')


    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name, ws, email
        }
        onConfirm(userData)
        console.log(onConfirm)
    }

    const validarTxt = (event) =>{
        const pattern = new RegExp( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
        const inputName = event.target.value;
        console.log(inputName)
       
        if(inputName === '') {
            setResponseName('El campo no puede estar vacío')
          } else {
            // Segunda validacion, si input es mayor que 35
            if(inputName.length > 35) {
             
              setResponseName('El campo no puede tener mas de 35 caracteres')
            } else {
              // Tercera validacion, si input contiene caracteres diferentes a los permitidos
              if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(inputName.trim())){ 
                setResponseName('Caracter inválido')
              } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                setResponseName(true)
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
            } else {
                setEmail(inputEmail)
              // Tercera validacion, si input contiene caracteres diferentes a los permitidos
              let reg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!reg.test(inputEmail)){
              // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
              // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                setResponseEmail('No es un email')
              }else{
                  setEmail(inputEmail)
                  setResponseEmail(true)
                  setResponseEmail('Email correcto')
                }
              }
            }
          
    }

    const validarNumber = (event) =>{
    }

    return (
        <div className='d-flex flex-column align-self-baseline'>
            <form className="form-inline w-50 m-4 " id="searchSelected">
                <h2>Orden de pedido</h2>
                <input
                    className="form-control mr-sm-2 w-75 mx-4" type="text"
                    placeholder=" Ingresa tu nombre"
                    id="inputName"
                    name='name'
                    value={name}
                    onChange={(event) => validarTxt(event)} 
                >
                </input>
                {responseName.length >0?<input className="form-control mr-sm-2 w-75 mx-4 inputRed" type="text" value={responseName}/>: ''}
              
               <input
                    className="form-control mr-sm-2 w-75 mx-4" type="text"
                    placeholder=" Ingresa tu email"
                    id="inputEmail"
                    name='email'
                    value={email}
                    onChange={(event) => validarEmail(event)} 
                >
                </input>
                {responseEmail.length >0?<input className="form-control mr-sm-2 w-75 mx-4 inputRed" type="text" value={responseEmail}/>: ''}


                <input
                    className="form-control mr-sm-2 w-75 m-4" type="text"
                    placeholder=" Ingresa tu whatsapp"
                    id="inputWhatsapp"
                    name='ws'
                    value={ws}
                    onChange={validarNumber}
                >
                </input>

                <button type="submit" onSubmit={handleConfirm} className="btn btn-success">Confirmar</button>
            </form>
        </div>
    )
}

export default CheckoutForm