import Profile from "./Profile";
import PizzaCart from "./PizzaCart";
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Navbar = () => {
  const token = false;
  const total=25000;
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand p-2" href="/">Pizzeria Mamma Mia!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <Profile />
    </ul>
    <div class="d-inline-flex align-items-center">
    <li class="d-inline-flex align-items-center">
        <a class="nav-link  m-2 navbar-brand" href="/cart">🛒 Carrito</a>  
    </li> 
    <li>
      {/**<span class="m-2 navbar-brand " >Total: {"$ "+ new Intl.NumberFormat('de-DE').format(total)}</span>
    */} 
    </li>
    </div>
  </div>
</nav>
    </>

  )
}

export default Navbar