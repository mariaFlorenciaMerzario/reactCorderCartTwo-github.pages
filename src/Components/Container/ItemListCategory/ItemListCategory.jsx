import Card from "../Card"
import { getProductsByCategory} from '../../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../../Spinner/SpinnerB"
import { useParams } from "react-router-dom"
import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import {collection, getDocs , query, where} from "firebase/firestore"
import {db} from "../../../firebase/config"

const ItemListCategory = () => {
    
    const [products, setProducts] = useState([])
    let category =''
    let {categoryName} = useParams()
    console.log(categoryName)
    let value = 0
     if(categoryName === 'CarnePollo') {
       
         category = ' Carne - Pollo'
         value = 1
        }else if(categoryName ==='JamonCapresse'){
            category = ' Jamón y Queso - Capresse'
            value = 2
        }else{
            category = 'Premiun'
            value = 3
        }
    
   /*useEffect(() =>{
    setProducts('')
        getProductsByCategory(categoryName)
        .then(response =>{   
            setProducts(response)  
        })
        .catch(error => {
            console.error(error)
        })
    },[categoryName]) */
    
    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", value))
        getDocs(q)
        .then((resp) => {
            setProducts(
            resp.docs.map((doc) => {
               return {...doc.data(), id: doc.id} 
            }))
        })

    },[value])

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