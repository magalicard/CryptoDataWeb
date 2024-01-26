import { Link } from "react-router-dom"
import "./Home.css"
import logosimple from "/Users/Magali/proyecto-del-curso/public/logosimple.png"

const Home = () => {
    return (
        <div className="home">
        <div className="logo">
        <img src={logosimple} alt="Logo de la pagina" />
        </div>
        <div className="titulo">
            Bienvenido a Crytoufrency!
        </div>
        <div className="titulo2">Conoce las 100 criptos mas usadas</div>
        <Link to="/criptomonedas" className="Link button">Ver criptomonedas</Link>
        </div>
    )
}

export default Home