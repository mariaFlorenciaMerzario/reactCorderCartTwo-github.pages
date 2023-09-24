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

export const getProductsByCategory =(categoryName) =>{
  console.log('en el json')
  console.log(categoryName)
  let categoryId=0
  if(categoryName === 'CarnePollo'){
    console.log(1)
     categoryId = 1
  }else if(categoryName === "JamonCapresse"){
     categoryId = 2
     console.log(2)
  }else{
     categoryId = 3
     console.log(3)
  }
return new Promise((resolve, reject) => {
    const product = jsonFile.products.filter((prod) => prod.category === categoryId);
    console.log(product)
    if (product) {
     setTimeout(() =>{
      resolve(product);
    }, 2000)
    } else {
      reject("Producto no encontrado");
    }
  });
}
  
