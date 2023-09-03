import Card from "../Card"
import { getProducts, getProductsByCategory} from '../../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../../Spinner/SpinnerB"

import { useParams } from "react-router-dom"

const ItemListCategory = () => {
    const [products, setProducts] = useState([])
    let {categoryId} = useParams()
    categoryId = parseInt(categoryId)
  
    console.log(parseInt(categoryId))
    useEffect(() =>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })

    },[categoryId])
    return(
        <>
        {console.log(getProductsByCategory)}
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
export default ItemListCategory