import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Main from "./Main"
import Css from './ItemDetail.css'
const Container = () => {
    return(
        <>
         <div className="container mtop5">
            <ItemListContainer greeting={'Bienvenidos'}/>
            <Main />
         </div>
        </>
    )
}
export default Container