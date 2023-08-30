import Card from "./Card"
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

const Main = () => {
    return(
      
        <>
        <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">   

         {products.map((element, index) => (
          <Card
            key={index}
            image={element.image}
            name={element.name}
            price={element.price}
            description={element.description}
         
            />
         ))}         
      </div>
        </>
      
    )
}
export default Main