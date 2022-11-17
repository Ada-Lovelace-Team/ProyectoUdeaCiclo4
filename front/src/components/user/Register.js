import React,{ Fragment,useState,useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useSelector, useDispatch} from 'react-redux';
import MetaData from '../layout/MetaData'
import {register, clearErrors} from "../../actions/authActions"
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [user, setUser]= useState({
        nombre: "",
        correo: "",
        clave: "",
    })

    const navigate=useNavigate();
    const {nombre, correo, clave} = user;
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview]= useState("https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w")
    const alert= useAlert();
    const dispatch= useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error, alert])

const submitHandler = (e) =>{
    e.preventDefault();

    const formData= new FormData();
    formData.set("nombre", nombre);
    formData.set("correo", correo);
    formData.set("clave", clave);
    formData.set("avatar", avatar)

        dispatch(register(formData))
    }
    const onChange = e =>{
        if (e.target.name === "avatar"){
            const reader = new FileReader();

        reader.onload=()=>{
            if (reader.readyState ===2){
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    else{
        setUser({ ...user, [e.target.name]: e.target.value})
    }
}




  return (
    <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
<Fragment>
        <MetaData title={'Registrar Usuario'} />
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                    <h1 className="mb-3">Registrar</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">Nombre</label>
                        <input
                            type="name"
                            id="name_field"
                            className="form-control"
                            name='nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            name='correo'
                            value={correo}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            name='clave'
                            value={clave}
                            onChange={onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                    <img
                                    src={avatarPreview}
                                    className="rounded-circle"
                                    alt="Vistar Previa del Avatar"></img>
                                </figure>
                            </div>
                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept="images/*"
                                    onChange={onChange}
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Escoger Avatar
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        id="register_button"
                        type="submit"
                        className="btn btn-block py-3"
                        
                    >
                        REGISTRAR
                    </button>
                </form>
            </div>
        </div>
    </Fragment>
    )}
    </Fragment>
  )
}
