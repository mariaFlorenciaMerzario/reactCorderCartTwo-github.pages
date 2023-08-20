import Card from "./Card"

const Main = () => {
    return(
        <>
         <div className="m-2 row d-flex flex-md-row flex-column justify-content-center">      
            <Card image='argentinas.jpg' name="Empanada de Carne" price="500" description="Un producto elaborado a base de Carne, huevo, cebolla y aceitunas"/>
            <Card image='carneFrita.jpeg' name="Empanada de Carne Frita" price="500" description="Un producto elaborado a base de  Carne, huevo, cebolla y aceitunas "/>
            <Card image='capresse.jpg' name="Empanada Capresse" price="600" description="Un producto elaborado a base de Queso, tomate y albahaca "/>
            <Card image='jamonQueso.jpg' name="Empanada de Jamón y Queso" price="500" description="Un producto elaborado a base de Jamón y Queso"/>
            <Card image='criolla.jpg' name="Empanada Criolla" price="500" description="Un producto elaborado a base de Carne, huevo, cebolla y aceitunas"/>
            <Card image='pollo.jpg' name="Empanada de Pollo" price="500" description="Un producto elaborado a base de Pollo, huevo, cebolla y aceitunas "/>
            <Card image='saltena.jpg' name="Empanada Salteña" price="500" description="Un producto elaborado a base de Carne, huevo, cebolla y aceitunas"/>
            <Card image='roqueforJamon.jfif' name="Empanada de Roquefort y Jamón" price="650" description="Un producto elaborado a base de roquefort y jamón "/>
         </div>
        </>
    )
}
export default Main