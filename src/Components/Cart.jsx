import Home from "./Home"
import Footer from "./Footer"
import Navbar from "./Navbar"
import PizzaCart from "./PizzaCart"
import { pizzaCart } from "./Pizzas";

const Cart = () => {
  return (
    <>
      <Navbar/>
      <PizzaCart/>
      <Footer/>
    </>
  
  )
}

export default Cart;

