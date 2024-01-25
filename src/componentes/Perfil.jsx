import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UseContext";

const Perfil = () => {

    const usuario = useContext(UserContext)

    return(
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <div>
                <span>Usuario desde: {usuario.registered} </span>
            </div>
        </div>
    )
}

export default Perfil;