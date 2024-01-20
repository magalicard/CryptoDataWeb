import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const params = useParams() //Este hook nos devuelve los parametros q existen en la URL
    //en este caso le indique como parametro id

    return (
        <h1>Soy una criptomoneda {params.id} </h1>
    )
}

export default CriptoPage