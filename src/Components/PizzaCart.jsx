import { useState } from "react";
import { pizzaCart } from "./Pizzas";
const PizzaCart = () => {
  const [cart,setCart]=useState(pizzaCart)
    const sumarPizzas =(id) =>{
      setCart(cart.map((item)=> item.id===id ?{...item,count:item.count +1}:item)
      )};
    const restarPizzas =(id) =>{
      setCart( cart.map((item)=> item.id===id && item.count >0
        ?{...item,count:item.count -1}:item 
        ).filter(item => item.count>0)
      )};
    const totalPrice =cart.reduce((total,item)=>total+item.price*item.count,0);
return (
<>
  <div  class="d-flex justify-content-around m-5  align-items-center col-12">
    <h1> Carrito de pizzas</h1>
  </div>   
  <div class="container">
    <div class="d-flex justify-content-around   align-items-center col-10">
      <div className="col align-self-center">
        <ul>
          {cart.map((item)=> (
          <div key={item.id} className="listaPizza d-flex justify-content-around  align-items-center col-12">
          <img src={item.img} alt={item.name} />
          {item.name} - ${item.price.toLocaleString()}
          <button className="btn btn-success border border-secondary" onClick={()=>sumarPizzas(item.id)}> +</button>
          {item.count}
          <button className="btn btn-danger border border-secondary" onClick={()=>restarPizzas(item.id)}> -</button>
          </div>
        ))}
        </ul>
        <h2> Total: ${totalPrice.toLocaleString()}</h2>
        <button className="btn btn-green border border-secondary" > Pagar</button>
      </div>
    </div>
  </div>
</>
) }
export default PizzaCart;

