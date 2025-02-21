
import CardPizza from "./CardPizza"
import "./Home.css"
import  {pizzas}  from "./Pizzas"

const Home = () => {
  return (
    <>
    <div className="bodyHome">
    
    <section className='pizzas'>
{pizzas.map((pizza) => (
<CardPizza key={pizza.id}
{...pizza} 

 />
))}

</section>

    </div>
 </>
   
  )
}

export default Home