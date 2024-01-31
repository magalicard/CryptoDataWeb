import { createContext } from "react";
import { useEffect, useState } from "react"
import axios from "axios"

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    

    const [ usuario, setUsuario ] = useState()

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/2`)
        .then(data => {
            setUsuario(data.data.data)       
        })
        .catch( e => {
            console.error(e)
        })
            
    }, []) 
    
    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider } 