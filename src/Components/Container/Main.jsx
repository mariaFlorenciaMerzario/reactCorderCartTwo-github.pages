import Card from "./Card"
import { getProducts} from '../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../Spinner/SpinnerB"

import { useParams } from "react-router-dom"
const Main = () => {
    const [products, setProducts] = useState([])
   

    useEffect(() =>{
        getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })

    },[])
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