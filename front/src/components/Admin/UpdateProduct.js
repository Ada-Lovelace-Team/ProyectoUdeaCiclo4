import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProductDetails, updateProduct } from '../../actions/productActions'
import MetaData from '../layout/MetaData'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom'




export const UpdateProduct = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [talla, setTalla] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [inventario, setInventario] = useState(0);
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])
    const [oldImagen, setOldImagen] = useState([])

    const tallas = [
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    const categorias = ["Mujeres", "Hombres", "Niños"]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, isUpdated, error: updateError } = useSelector(state => state.product)
    const { error, product } = useSelector(state => state.productDetails)
    const productId = params.id;


    useEffect(() => {
        if (product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        } else {
            setNombre(product.nombre);
            setPrecio(product.precio);
            setTalla(product.talla);
            setDescripcion(product.descripcion);
            setCategoria(product.categoria);
            setProveedor(product.proveedor);
            setInventario(product.inventario);
            setOldImagen(product.imagen)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (updateError) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (isUpdated) {
            alert.success("Producto actualizado correctamente");
            navigate("/dashboard")
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }
    }, [dispatch, alert, error, isUpdated, updateError, product, productId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('talla', talla);
        formData.set('descripcion', descripcion);
        formData.set('proveedor', proveedor);
        formData.set('inventario', inventario);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(updateProduct(product._id, formData))
    }
    const onChange = e => {
        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])
        setOldImagen([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    return (
        <Fragment>
            <MetaData title={'Nuevo Producto'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Actulizar Producto</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Nombre</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Precio</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name_field">Talla</label>
                                    <select className="form-control"
                                        id="category_field"
                                        value={talla} onChange={(e) => setTalla(e.target.value)}>
                                        {tallas.map(talla => (
                                            <option key={talla} value={talla} >{talla}</option>
                                        ))}
                                    </select>



                                </div>


                                <div className="form-group">
                                    <label htmlFor="description_field">Descripción</label>
                                    <textarea className="form-control"
                                        id="description_field"
                                        rows="8"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category_field">Categoria</label>
                                    <select className="form-control"
                                        id="category_field"
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}>
                                        {categorias.map(categoria => (
                                            <option key={categoria} value={categoria} >{categoria}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="seller_field">Proveedor</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={proveedor}
                                        onChange={(e) => setProveedor(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="stock_field">Inventario</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={inventario}
                                        onChange={(e) => setInventario(e.target.value)}
                                    />
                                </div>


                                <div className='form-group'>
                                    <label>Imágenes</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imágenes
                                        </label>
                                    </div>

                                    {oldImagen && oldImagen.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                    {imagenPreview.map(img => (
                                        <img src={img} key={img} alt="Vista Previa" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    Actualizar
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateProduct