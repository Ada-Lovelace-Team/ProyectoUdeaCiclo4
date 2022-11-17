import React, { Fragment,useEffect,useState } from 'react'
import MetaData from '../layout/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, login} from "../../actions/authActions"
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const navigate =useNavigate();
    const [correo, setCorreo]= useState("")
    const [clave, setClave]= useState("")
    const dispatch=useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
    }
    if (error) {
        dispatch(clearErrors)
    }
},[dispatch, isAuthenticated, error])

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(login(correo,clave))
    }


    return (
        <Fragment>
        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
            <MetaData title={"Inicie Sesión"} />
            <div className='row wrapper'>
                <div className='col-10 col-lg-5'>
                    <form className='shadow-lg' onSubmit={submitHandler}>
                        <h1 className='mb-3'>Inicio de Sesión</h1>
                        {/*Campo para el correo*/}
                        <div className='form-group'>
                            <label htmlFor='correo_field'>Correo electrónico</label>
                            <input type="email"
                                id="correo_field"
                                className='form-control'
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}></input>
                        </div>
                        {/*Campo para la clave*/}
                        <div className='form-group'>
                            <label htmlFor='password_field'>Contraseña</label>
                            <input type="password"
                                id="clave_field"
                                className='form-control'
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}></input>
                        </div>
                        <Link to="/forgotPassword" className='float-right mb-4'>Olvidó su contraseña?</Link>

                        {/*Boton iniciar sesiòn*/}
                        <button id="login_button" type="submit" className='btn btn-block py-3'>LOGIN</button>

                        <Link to="/register" className='float-right mt-3'>Usuario nuevo? Registrese aquí</Link>
                    </form>
                </div>

            </div>
        </Fragment>
        )}
        </Fragment>
    )
}
