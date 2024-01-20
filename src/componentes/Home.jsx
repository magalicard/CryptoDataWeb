import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
        <h1>¡Bienvenido a Crytoufrency!</h1>
        <h2>Conoce las 100 criptos mas usadas</h2>
        <Link to="/criptomonedas">Ver criptomonedas</Link>
        </>
    )
}

export default Home