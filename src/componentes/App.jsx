import { Outlet } from "react-router-dom"
import Menu from "../menu/Menu"

const App = () => {
    return (
        <>
            <Menu/>
            <Outlet/> {/* le dice a mi grupo de rutas que usen esta estructura */}
        </>
    )
}

export default App
