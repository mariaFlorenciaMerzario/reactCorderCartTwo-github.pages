import Card from "./Card"
import { getProducts} from '../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../Spinner/SpinnerB"
import {collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase/config"

import { useParams } from "react-router-dom"

const Main = () => {
    const [products, setProducts] = useState([])
    const [term, setTerm] = useState("");
   
      const handleSearch = (event) => {
        setTerm(event.target.value);
        };

      const filteredData = products.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );

      useEffect(() => {
        const productosRef = collection(db, "productos");
        getDocs(productosRef)
        .then((resp) => {
            setProducts(
            resp.docs.map((doc) => {
               return {...doc.data(), id: doc.id} 
            }))
        })

    },[])

  /*  useEffect(() =>{
        getProducts()
        .then(response =>{  
            setProducts(response)  
            console.log(response)
        })
            .catch(error => {
             console.error(error)
        })

    },[])*/

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
            <form>    
            <input
                type="text"
                placeholder="Ingresá el producto buscado..."
                value={term}
                onChange={handleSearch}
                className="form-control w-25 m-auto bg-light"
            />
          </form>
        { products.length > 0 ?
            <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">
                {filteredData.map((element, index) => (
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