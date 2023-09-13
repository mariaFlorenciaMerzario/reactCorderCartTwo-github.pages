//let jsonFile = require('../src/data/json.json');
import jsonFile from '../src/data/json.json'
console.log(jsonFile)

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
        setTimeout(() =>{
            resolve(product);
        }, 2000)
      } else {
        reject("Producto no encontrado");
      }
    });
  };

export const getProductsByCategory =(categoryId) =>{
return new Promise((resolve, reject) => {
    const product = jsonFile.products.filter((prod) => prod.category === categoryId);
    if (product) {
     setTimeout(() =>{
      resolve(product);
    }, 2000)
    } else {
      reject("Producto no encontrado");
    }
  });
}
  
