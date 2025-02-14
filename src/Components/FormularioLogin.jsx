import { useState } from "react";
import "./Formulario.css"

const Formulariologin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [errorpass, setErrorPass] = useState(false)
  const [pass, setPass] = useState(false)



  const validarDatos = (e) => {
    e.preventDefault()
    
    if(email === '' || password === '' ) {
        setError(true)
        setErrorPass(false)
        setPass(false)
        return
    } 
    else if (password.length<6){
      setErrorPass(true)
      setError(false)
      setPass(false)
    
      return
    }else{
      setPass(true)
      setErrorPass(false)
      setError(false)
      
    }
    setError(false)
    setErrorPass(false)
    setEmail('')
    setPassword('')
  }

  return (
    <><div className="divFormulario">
     <form className="formulario  col-10" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        {errorpass ? <p>Contraseña menor a 6 caracteres</p> : null}
        {pass ? <p>Datos Enviados!</p> : null}
        
        
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
