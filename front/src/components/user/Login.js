import React, {Fragment, useEffect, useState} from 'react'
import MetaData from '../layout/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, login } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail]= useState ("")
    const [password, setPassword]= useState("")
    const dispatch=useDispatch();
    const { isAuthenticated, error, loading}= useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error ])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))



    }



  return (
    <Fragment>
    <MetaData title={"Inicie Sesiòn"}/>
    <div className= 'row wrapper'>
        <div className= 'col-10 col-lg-5'>
            <form className='shadow-lg' onSubmit={submitHandler}>
                <h1 className='mb-3'>Inicio de Sesión</h1>
                
{/*campo email*/}               
                <div className='form-group'>
                    <label htmlFor='email_field'>Correo electrónico</label>
                    <input type= "email"
                     id="email_field"
                     className='form-control'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}></input>
                     
                </div>

{/*campo contraseña*/}
               <div className='form-group'>
                <label htmlFor='password_field'>Contraseña</label> 
                <input type="password"
                 id="password_field" 
                 className='form-control'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}></input>
                </div> 

                <Link to="/password/forgot" className='float-right mb-4'>¿Olvidó su contraseña?</Link>
{/*inicio sesion*/}
                <button id="Login_button" type= "submit" className='btn btn-block py-3'>LOGIN</button>
                <Link to= "/register" classname='float-right mt-3'>¿Nuevo usuario? Registrese aquí</Link>
           
            </form>
        </div>
    </div>
</Fragment>

)
}