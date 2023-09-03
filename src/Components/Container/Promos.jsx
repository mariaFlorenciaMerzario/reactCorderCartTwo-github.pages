import React from 'react'
import Card from "./Card"
let promos =[
    {
        id: 1,
        name: 'Combo Criollo',
        composition: [
            {id:1, quantity:6}
        ]
    },
    {
        id: 2,
        name: 'Combo Carne y Jamón y Queso',
        composition: [
            {id:1, quantity:3},
            {id:3, quantity:3}
        ]
    },
    {
        id: 3,
        name: 'Combo Capresse',
        composition: [
            {id:2, quantity:6}
        ]
    },
    {
        id: 4,
        name: 'Combo Especial -3 Roquefort + 3 Jamon y Queso',
        composition: [
            {id:7, quantity:3},
            {id:2, quantity:3},
        ]
    },
]
let products =[
    {
        image: 'argentinas.jpg',
        name: 'Empanada de Carne',
        price: 500,
        description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas'
    },
    {
        image: 'capresse.jpg',
        name: 'Empanada Caprese',
        price: 500,
        description:'Un producto elaborado a base de Queso, tomate y albahaca'
    },
    {
        image: 'jamonQueso.jpg',
        name: 'Empanada de Jamón y Queso',
        price: 500,
        description:'Un producto elaborado a base de Jamón y Queso'
    },
    {
        image: 'criolla.jpg',
        name: 'Empanada Criolla',
        price: 650,
        description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas'
    },
    {
        image: 'pollo.jpg',
        name: 'Empanada de Pollo',
        price: 450,
        description:'Un producto elaborado a base de Pollo, huevo, cebolla y aceitunas'
    },
    {
        image: 'saltena.jpg',
        name: 'Empanada Salteña',
        price: 500,
        description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas'
    },
    {
        image: 'roqueforJamon.jfif',
        name: 'Empanada de Roquefort y Jamón',
        price: 700,
        description:'Un producto elaborado a base de Roquefort y Jamón'
    },
    {
        image: 'argentinas.jpg',
        name: 'Empanada de Carne',
        price: 500,
        description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas'
    }
    ]

    let total=0
const Promos = () => {
  return (
    <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">   
<h1>PROMOSSSSSSS</h1>
    {promos.map((item, index) => (
        <Card key={index}>
            <p>{item.name}</p>
            {
            total = products?.reduce((acu, element) => ( acu = acu + element.price * item.quantity ))
            } 
            <p>{total}</p>
        <p>Precio del Combo: {total}</p>
            </Card>
        ))}
  </div>
  )
}

export default Promos