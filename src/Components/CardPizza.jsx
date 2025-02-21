import "./CardPizza.css"

const CardPizza=(props)=>{

return (
<>
    <div className="cardPiza ">
        <div className="cardTop">
            <img 
            src={props.img} 
            />
            <h2>{props.name}</h2>
        </div>
    <div className="cardIngredientes">
        <h4>Ingredientes</h4>
        <p className="pizzaLogo" ></p> 
        <div className="infoIngredientes">
        <p >{props.ingredients}</p>
        </div>
    </div>
    <h4>Precio: {"$ "+ new Intl.NumberFormat('de-DE').format(props.price)}</h4>
    <div className="cardPizaBoton">
    <button className="btn btn-light border border-secondary"> Ver mas</button>
    <button className="btn btn-dark"> Añadir</button>
    </div>
    </div>
</>
)}
export default CardPizza