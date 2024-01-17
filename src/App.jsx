import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./componentes/cripto"
import "./App.css"
function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}`)
      .then((data) => {
        //console.log(data) //nos devuelve un objeto 
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("Algo salió mal");
      });
  },[])

  if(!criptos) return <span>Cargando...</span>

  return(
   <div className="main-container">
    <h1>Lista de criptomonedas</h1>
    <div className="cripto-container">
      {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
        <Cripto 
        key={id}
        name={name}
        priceUsd={priceUsd}
        symbol={symbol} 
        changePercent24Hr={changePercent24Hr}
        />
        
      ))}
    </div>

   </div>
  )
}

export default App

