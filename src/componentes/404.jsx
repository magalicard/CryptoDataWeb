import criptosad from '../../public/criptosad.png'
import './404.css'
const Pagina404 = () => {
    return(
    <div>
       <div className='titulo'>Pagina no encontrada</div>
       <div className='logo'>
       <img src={criptosad} alt="Cripto triste" />
       </div>
       <span className='subtitulo'>La pagina solicitada no existe</span>
    </div>
   
)}

export default Pagina404