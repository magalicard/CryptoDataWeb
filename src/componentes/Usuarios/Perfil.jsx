import { useContext} from "react"
import { UserContext } from "../../context/UseContext";
import './Perfil.css'
const Perfil = () => {

    const user = useContext(UserContext)

    if (!user) {
        return <div>Cargando perfil...</div>;
    }

    return(
        <div>
            <div className="Avatar">
            <img src={user.avatar} />
            </div>
            <h1>Perfil de {user.first_name} {user.last_name}</h1>
            <div>
                <span>Email: {user.email} </span>
            </
            div>
        </div>
    )
}

export default Perfil;