import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./Menu.css"
import { UserContext } from "../context/UseContext"

const Menu = () => {

  const navigation = useNavigate()

  const usuario = useContext(UserContext)
  if (!usuario) {
    return <div>Cargando perfil...</div>;
}

  return (
    <nav className="main-menu">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
        <li><NavLink to="/perfil">Perfil de { usuario.first_name }</NavLink></li>
        <li><a onClick={() => {
          localStorage.removeItem("tokenEDmarket")
          navigation("/login")
        }} >Cerrar sesión</a></li>
      </ul>
    </nav>
  )
}

export default Menu