import { useState } from "react";
import "./Formulario.css"

const FormularioRegistro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtrue, setPasswordtrue] = useState("");
  const [error, setError] = useState(false)
  const [errorpass, setErrorPass] = useState(false)
  const [errorlength, setErrorLength] = useState(false)
  const [pass, setPass] = useState(false)



  const validarDatos = (e) => {
    e.preventDefault()
    
    if(email === '' || password === ''  || passwordtrue === '' ) {
        setError(true)
        setErrorPass(false)
        setPass(false)
        setErrorLength(false)
        return
    } else if (password !== passwordtrue ){
      console.log(password)
      console.log(passwordtrue)
      setErrorPass(true)
      setError(false)
      setPass(false)
      setErrorLength(false)
      return
    }else if(password.length<6  || passwordtrue.length<6){
      setErrorLength(true)
      setErrorPass(false)
      setError(false)
      setPass(false)
      return
    }else if (password === passwordtrue && password.length>5 ){
      setPass(true)
      setErrorPass(false)
      setError(false)
      setErrorLength(false)
      setEmail('')
      setPassword('')
      setPasswordtrue('')
      return
    }
    setError(false)
    setErrorPass(false)
    setErrorLength(false)
    setEmail('')
    setPassword('')
    setPasswordtrue('')
  }

  return (
    <><div className="divFormulario">
     <form className="formulario  col-10" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        {errorpass ? <p>Contraseña no coincide</p> : null}
        {pass ? <p>Felicidades su cuenta a sido creada!</p> : null}
        {errorlength ? <p>Contraseña debe contener minimo 6 caracteres</p> : null}
      
        
        
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
