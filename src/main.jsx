import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuadricula from './componentes/Cuadricula.jsx'
import Home from './componentes/Home.jsx'
import CriptoPage from './componentes/cripto/CriptoPage.jsx'
import Perfil from './componentes/Usuarios/Perfil.jsx'
import { UserContextProvider } from './context/UseContext.jsx'
import Login from './componentes/Usuarios/Login.jsx'
import Pagina404 from './componentes/Pagina404.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    //toda mi aplicacion esta provista de esta data
     <UserContextProvider> 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>} />
                <Route path='perfil' element={<Perfil/>} />
            </Route>
            <Route path='/criptomonedas' element={<App/>}>
                <Route index element={<Cuadricula/>}/>
                <Route path=':id/' element={<CriptoPage/>} />
            </Route>
            <Route path='/login' element={<Login/>} /> 
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
    </UserContextProvider>
)
