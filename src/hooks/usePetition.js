import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(false) // Nuevo estado para manejar los errores

    useEffect(() => {
        setCargando(true)
        setError(false) // Resetea el error antes de cada petición
        
        axios.get(`${API_URL}/${endpoint}`)
        .then(data => {
            setData(data.data.data)
            setCargando(false)
        })
        .catch( e => {
            console.error(e)
            setCargando(false)
            setError(e) // Actualiza el estado de error cuando ocurre un error
        })
            
    }, [endpoint, API_URL]) // Agrega las dependencias a useEffect

    return [data, cargando, error] // Devuelve el estado de error
}

export default usePetition;
