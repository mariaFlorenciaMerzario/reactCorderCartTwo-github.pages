import Card from "../Card"
import { getProducts, getProductsByCategory} from '../../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../../Spinner/SpinnerB"
import { useParams } from "react-router-dom"
import ItemListContainer from "../../ItemListContainer/ItemListContainer"

const ItemListCategory = () => {
    let category =''
    const [products, setProducts] = useState([])
    let {categoryId} = useParams()
    if(categoryId === '1') {
         category = ' Carne - Pollo'
    }else if(categoryId ==='2'){
         category = ' Jamón y Queso - Capresse'
    }else{
         category = ' Premiun'
    }
    useEffect(() =>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        console.log(getProductsByCategory)
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
         <ItemListContainer className="my-4" greeting={'Resultados para la categoría:'+ category}/>
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