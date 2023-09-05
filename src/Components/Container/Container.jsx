import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Main from "./Main"
const Container = () => {
    return(
        <>
         <div className="container">
       
            <ItemListContainer greeting={'Bienvenidos'}/>
            <Main />
         </div>
        </>
    )
}
export default Container