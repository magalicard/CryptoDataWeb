import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './componentes/404.JSX'
import Cuadricula from './componentes/Cuadricula.jsx'
import Home from './componentes/Home.jsx'
import CriptoPage from './componentes/cripto/CriptoPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>} />
            </Route>
            <Route path='/criptomonedas' element={<App/>}>
                <Route index element={<Cuadricula/>}/>
                <Route path=':id/' element={<CriptoPage/>} />
            </Route>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
)
