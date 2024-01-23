import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CriptoPage = () => {
    
    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams() //Este hook nos devuelve los parametros q existen en la URL
    //en este caso le indique como parametro id
    const [cripto, setCripto] = useState({})
    useEffect(() => {
        axios.get(`${API_URL}/${params.id}`)
        .then(data =>
            setCripto(data.data.data) )
        .catch( e => console.error(e))
    }, [])

    return (
        <>
        <h1>Soy una criptomoneda {params.id} </h1>
       <div className="info">
        <ul>
          <li><span className="label">Nombre: </span>{cripto.name}</li>
          <li><span className="label">Simbolo: </span>{cripto.symbol}</li>
        </ul>

       </div>
        </>
    )
}

export default CriptoPage