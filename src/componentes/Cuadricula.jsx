
import "./Cuadricula.css"
import logosimple from "/Users/Magali/proyecto-del-curso/public/logosimple.png"
import Cripto from "./cripto/Cripto"
import usePetition from "../hooks/usePetition"



function Cuadricula() {

  const [criptos, cargandoCriptos, error] = usePetition('')

  if (cargandoCriptos) return <span>Cargando...</span>
  if (error) return <div>Error: {error.message}</div>;


  return(
   <div className="main-container">
    <div className="logo">
        <img src={logosimple} alt="Logo de la pagina" />
    </div>
    <h1>Lista de criptomonedas</h1>
    <div className="cripto-container">
      {criptos && criptos.map(({id, name, priceUsd, symbol, changePercent24Hr, rank}) => (
        <Cripto 
        key={id}
        name={name}
        priceUsd={priceUsd}
        symbol={symbol} 
        changePercent24Hr={changePercent24Hr}
        id={id}
        rank={rank}
        />
        
      ))}
    </div>

   </div>
  )
}

export default Cuadricula

