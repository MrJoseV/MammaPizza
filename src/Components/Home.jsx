
import CardPizza from "./CardPizza"
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className="bodyHome">
      <CardPizza url='https://img.freepik.com/foto-gratis/rebanadas-pizza-pepperoni-sobre-mesa_140725-809.jpg' alt="pizza española" nombre="Española"  ingredientes={["mozzarella ", "gorgonzola ", "parmesano ", "provolone"] } precio={6950}/>
      <CardPizza url='https://img.freepik.com/foto-gratis/pizza-salchicha-servida-hierbas-secas_140725-1219.jpg' alt="pizza pepperoni"  nombre="Pepperoni" price={6950} ingredientes={["mozzarella ", "pepperoni ", "orégano "]}/> 
      <CardPizza url='https://img.freepik.com/foto-gratis/pizza-margarita-mesa_140725-1201.jpg' alt="pizza napolitana" nombre="Napolitana" precio={5950} ingredientes={["mozzarella ", "tomates ", "jamón ", "orégano"]}/> 
    
    </div>
 </>
   
  )
}

export default Home