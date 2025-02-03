import "./CardPizza.css"

const CardPizza=(props)=>{

return (
    
    <>
 
    <div className="cardPiza">
        <div className="cardTop">
            <img 
            src={props.url} 
            alt={props.alt}
            />
            <h2>{props.nombre}</h2>
        </div>
   
    <div className="cardIngredientes">
    
        <h4>Ingredientes</h4>
        <div className="infoIngredientes">
        <p className="pizzaLogo" ></p> 
        <p>{props.ingredientes}</p>
        </div>
        
    </div>
  
    <h4>Precio: {"$ "+ new Intl.NumberFormat('de-DE').format(props.precio)}</h4>
    <div className="cardPizaBoton">
    <button className="btn btn-light border border-secondary"> Ver mas</button>
    <button className="btn btn-dark"> Añadir</button>

    </div>
 
    </div>
  
    </>
)


}
export default CardPizza