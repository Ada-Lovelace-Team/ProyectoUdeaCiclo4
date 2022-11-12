import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <Fragment>
    <MetaData title={"Inicie Sesiòn"}/>
    <div className= 'row wrapper'>
        <div className= 'col-10 col-lg-5'>
            <form className='shadow-lg'>
                <h1 className='mb-3'>Inicio de Sesión</h1>
                
                
                <div className='form-group'>
                    <label htmlFor='email_field'>Correo electrónico</label>
                    <input type= "email" id="email_field"className='form-control'></input>
                </div>


               <div className='form-group'>
                <label htmlFor='password_field'>Contraseña</label> 
                <input type="password" id="password_field" className='form-control'></input>
                </div> 

                <Link to="/password/forgot" className='float-right mb-4'>¿Olvidó su contraseña?</Link>
{/*inicio sesion*/}
                <button id="Login_button" type= "submit" className='btn btn-block py-3'>LOGIN</button>
                <Link to= "/registrer" classname='float-right mt-3'>¿Nuevo usuario? Registrese aquí</Link>
           
            </form>
        </div>
    </div>
</Fragment>

)
}