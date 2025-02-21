import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Registro from './Components/Registro.jsx'
import Cart from './Components/Cart'


import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import PizzaCart from './Components/PizzaCart.jsx'

createRoot(document.getElementById('root')).render(
<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="/registro" element={ <Registro/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  
</>

  

)
