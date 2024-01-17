import "./cripto.css"

const Cripto = ({name, priceUsd}) => {
   return (
    <div className="cripto">
        <h2>{name} </h2>
        <div className="info">
            <p><span className="label">Precio: </span>{priceUsd}</p>
        </div>
    </div>
    )
}
export default Cripto