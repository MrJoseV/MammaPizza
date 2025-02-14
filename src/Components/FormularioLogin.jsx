import { useState } from "react";
import "./Formulario.css"
import Swal from 'sweetalert2'

const Formulariologin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [errorpass, setErrorPass] = useState(false)
  const [pass, setPass] = useState(false)



  const validarDatos = (e) => {
    e.preventDefault()
    
    if(email === '' || password === '' ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos son obligatorios!"
      });
        return
    } 
    else if (password.length<6){
        Swal.fire({title: 'Error!',
        text: 'Contraseña de minimo 6 caracteres!',
        icon: 'error'})
      return
    }else{
      Swal.fire({
        title: "Bienvenideee a mama pizza!!",
        text: "Bienvenido!",
        imageUrl: "https://www.nicepng.com/png/detail/148-1483364_pizza-steve-png-clip-art-stock-slice-of.png",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Pizza Steve"
      });
    }
    setEmail('')
    setPassword('')
  }

  return (
    <><div className="divFormulario">
     <form className="formulario  col-10" onSubmit={validarDatos}>
        
        <div className="form-group ">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="contraseña"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
  
    </div>
 
    </>
  );
};

export default Formulariologin;
