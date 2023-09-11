//let jsonFile = require('../src/data/json.json');
import jsonFile from '../src/data/json.json'
console.log(jsonFile)


/*const products =[
{
    id: 1,
    image: 'argentinas.jpg',
    name: 'Empanada de Carne',
    price: 500,
    description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas',
    category: 1
},
{
    id: 2,
    image: 'capresse.jpg',
    name: 'Empanada Caprese',
    price: 500,
    description:'Un producto elaborado a base de Queso, tomate y albahaca',
    category: 2
},
{
    id:3,
    image: 'jamonQueso.jpg',
    name: 'Empanada de Jamón y Queso',
    price: 500,
    description:'Un producto elaborado a base de Jamón y Queso',
    category: 2
},
{
    id:4,
    image: 'criolla.jpg',
    name: 'Empanada Criolla',
    price: 650,
    description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas',
    category: 1
},
{
    id:5,
    image: 'pollo.jpg',
    name: 'Empanada de Pollo',
    price: 450,
    description:'Un producto elaborado a base de Pollo, huevo, cebolla y aceitunas',
    category: 1
},
{
    id:6,
    image: 'saltena.jpg',
    name: 'Empanada Salteña',
    price: 500,
    description:'Un producto elaborado a base de Carne, huevo, cebolla y aceitunas',
    category: 1
},
{
    id:7,
    image: 'roqueforJamon.jfif',
    name: 'Empanada de Roquefort y Jamón',
    price: 700,
    description:'Un producto elaborado a base de Roquefort y Jamón',
    category: 3
},
{
    id: 8,
    image: 'argentinas.jpg',
    name: 'Empanada de Carne Picante',
    price: 500,
    description:'Un producto elaborado a base de Carne, huevo, cebolla y ají picante',
    category: 1
},
]

const promos =[
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
 export const getProducts =() =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },3000)
    })
 }
*/
 /*export const getProductById =(prodId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === prodId))
        }, 2000)
    })
 }
*/
 
 export function getProducts() {
    return new Promise((resolve, reject) => {
        const product = jsonFile.products;
        if (product) {
          resolve(product);
        } else {
          reject("Productos no encontrado");
        }
      });
}
    

export const getProductById = (prodId) => {
    return new Promise((resolve, reject) => {
      const product = jsonFile.products.find((prod) => prod.id === parseInt(prodId));
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    });
  };
 /*
 export const getProductsByCategory =(categoryId) =>{
        const res = jsonFile.products
        setTimeout(() =>{
             return Promise.resolve(res.filter(prod => prod.category === categoryId))
         }, 2000)
}*/

export const getProductsByCategory =(categoryId) =>{
return new Promise((resolve, reject) => {
    const product = jsonFile.products.filter((prod) => prod.category === categoryId);
    if (product) {
      resolve(product);
    } else {
      reject("Producto no encontrado");
    }
  });
}
  
