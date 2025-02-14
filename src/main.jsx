import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Registro from './Components/Registro.jsx'


import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="/registro" element={ <Registro/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </BrowserRouter>
  
</>

  

)
