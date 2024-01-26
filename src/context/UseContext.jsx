import { createContext } from "react";
import { useEffect, useState } from "react"
const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({})
    useEffect(() =>{
        setUsuario({  //valores estaticos
            name: "-",
            registered: "22/Dic/2022" 
        })
    }, [])
    
    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider } 