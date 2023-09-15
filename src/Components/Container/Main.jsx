import Card from "./Card"
import { getProducts} from '../../json'
import { useState, useEffect } from "react"
import SpinnerB from "../Spinner/SpinnerB"

import { useParams } from "react-router-dom"
import InputSearch from "./InputSearch"
const Main = () => {
    const [products, setProducts] = useState([])
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
   
    function searchingTerm(term) {
        let result = products.map(item =>{
            item.name.includes(term)
        })
        if(result.length >0){
            setData(data)
        } 
      }
      useEffect(() => {
        setData(products);
      }, [products]);
    
    useEffect(() =>{
        getProducts()
        .then(response =>{  
            setProducts(response)  
            console.log(response)
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
        {/* <InputSearch
            placeholder="Busqueda"
            name="term" */}
            <form>
                
            </form>
               <input type="text" onChange={e => setTerm(e.target.value)}/>
          
        

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
            { data.length > 0 ?
            <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">
                {console.log('data')}
                {console.log(data)}
                 {data.map(searchingTerm(term)).map(element => ( 
                <Card
                    id={element.id}
                    key={element.id}
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