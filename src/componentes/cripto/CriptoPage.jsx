import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptoHistorial"

const CriptoPage = () => {
    
    
   const params = useParams() //Este hook nos devuelve los parametros q existen en la URL
   
   const [cripto, cargandoCripto, errorCripto] = usePetition(`${params.id}`)
   const [history, cargandoHistory, errorHistory] = usePetition(`${params.id}/history?interval=d1`)

   if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>
   if (errorCripto || errorHistory)  return <span>Error: {errorCripto ? errorCripto : errorHistory}</span>

    return (
        <div className="cripto-page-container">
            {
                (cripto) && (<CriptoInfo cripto={cripto}/> )
            }
            {
                (history) && (<CriptoHistory history={history}/>)
            }
           
        </div>
    )
}

export default CriptoPage