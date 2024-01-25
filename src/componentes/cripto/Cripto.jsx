import { Link } from "react-router-dom"
import "./cripto.css"

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr}) => {
   return (
    <Link to={`/criptomonedas/${id}`}>
        <div className="cripto">
            <h2>{name} </h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Código: </span>{symbol}</p>
                <p>
                    <span className="label">Variacion 24hrs: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(2)}%
                    </span>
                </p>
            
            </div>
        </div>
    </Link>
    )
}
export default Cripto