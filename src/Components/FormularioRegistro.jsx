import { useState } from "react";
import "./Formulario.css"
import Swal from 'sweetalert2'

const FormularioRegistro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtrue, setPasswordtrue] = useState("");


  const validarDatos = (e) => {
    e.preventDefault()
    
    if(email === '' || password === ''  || passwordtrue === '' ) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos son obligatorios!"
      });
        return
    } else if (password !== passwordtrue ){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden!"
      });

      return
    }else if(password.length<6  || passwordtrue.length<6){
      Swal.fire({title: 'Error!',
        text: 'Contraseña de minimo 6 caracteres!',
        icon: 'error'})
      return
    }else if (password === passwordtrue && password.length>5 ){
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu cuenta a sido creada!",
        showConfirmButton: false,
        timer: 1500
      });
      setEmail('')
      setPassword('')
      setPasswordtrue('')
      return
    }
    setEmail('')
    setPassword('')
    setPasswordtrue('')
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
            name="email"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <label>Repita Contraseña</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setPasswordtrue(e.target.value)}
            value={passwordtrue}
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

export default FormularioRegistro;
