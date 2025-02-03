import Profile from "./Profile";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand p-2" href="#">Pizzeria Mamma Mia!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <Profile />

    </ul>
    <div class="justify-content-around">
   
    <span class="m-4 " >Total: {"$ "+ new Intl.NumberFormat('de-DE').format(total)}</span>
  
    </div>
   
  </div>
</nav>
    </>

  )
}

export default Navbar