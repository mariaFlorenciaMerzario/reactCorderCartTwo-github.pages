import Card from "./Card"
import { getProducts} from '../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../Spinner/SpinnerB"

import { useParams } from "react-router-dom"
const Main = () => {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
   

    useEffect(() =>{
        getProducts()
        .then(response =>{
          
            setProducts(JSON.parse(response))
            
        })
        .catch(error => {
            console.error(error)
        })

    },[])

   /* useEffect(() =>{
        const fetchData = async () =>{
            try{
                //'https://api.mercadolibre.com/sites/MLA/search?q=laptop&limit=10'
                // en la propiedad results para acceder..
                // data.results.map
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setUsers(data)
                console.log(users)
            }
            catch(error){
                console.log('erro al cargar datos', error)
             }
            }
            fetchData();
    },[])
*/
    return(
        <>
       
        { products.length > 0 ?
            <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">
                {products.map((element, index) => (
                <Card
                    id={element.id}
                    key={index}
                    image={element.image}
                    name={element.name}
                    price={element.price}
                    description={element.description}
                    category={element.category}
                />
                ))}          
            </div>
        :<SpinnerB/>
        }
      
        </>
      
    )
}
export default Main