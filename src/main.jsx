import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './componentes/404.JSX'
import Saludo from './componentes/Saludo.jsx'
import Menu from './menu/Menu.jsx'
import Cuadricula from './componentes/Cuadricula.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Cuadricula/>} />
                <Route path='saludo' element={<Saludo/>}/>
            </Route>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
)
