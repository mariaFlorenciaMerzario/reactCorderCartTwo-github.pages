import Card from "./Card"

const Main = () => {
    return(
        <>
         <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">      
            <Card image='../Assets/argentinas.jpg' name="Empanada de Carne" price="500"/>
            <Card image='../Assets/carneFrita.jpg' name="Empanada de Carne Frita" price="500"/>
            <Card image='../Assets/jamonQueso.jpg' name="Empanada de Jamón y Queso" price="500"/>
            <Card image='../Assets/capresse.jpg' name="Empanada Capresse" price="600"/>
            <Card image='../Assets/criolla.jpg' name="Empanada Criolla" price="500"/>
            <Card image='../Assets/pollo.jpg' name="Empanada de Pollo" price="500"/>
            <Card image='../Assets/roqueforJamon.jpg' name="Empanada de Roquefort y Jamón" price="650"/>
            <Card image='../Assets/saltena.jpg' name="Empanada Salteña" price="500"/>
         </div>
        </>
    )
}
export default Main