import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Main from "./Main"
const Container = () => {
    return(
        <>
         <div className="container">
            <Navbar/>
            <ItemListContainer greeting={'bienvenidos'}/>
            <Main />
         </div>
        </>
    )
}
export default Container