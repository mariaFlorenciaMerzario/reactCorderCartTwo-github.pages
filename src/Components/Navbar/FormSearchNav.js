
const FormSearchNav = () => {
    return(
        <form className="form-inline w-50 m-4" id="searchSelected">
            <input 
                className="form-control mr-sm-2 w-75" type="search"
                placeholder=" Ingresa el nombre a buscar" 
                aria-label="Search"
                id="inputSearch" 
            >
            </input>
        </form>
    )
}
export default FormSearchNav