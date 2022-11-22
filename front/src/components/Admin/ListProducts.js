import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact';
import MetaData from '../layout/MetaData';
import Sidebar from './Sidebar';
import { useAlert } from 'react-alert';
import { clearErrors, getAdminProducts} from '../../actions/productActions'; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 




export const ListProducts = () => {
    const alert= useAlert();
    const dispatch = useDispatch();
    const { loading, error,products} = useSelector(state=> state.products);

   
    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },

            ],
            rows: []
        }

        products.forEach(product => {
            data.rows.push({
                id: product._id,
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                acciones: <Fragment>
                <Link to={`/producto/${product._id}`} className="btn btn-primary py-1 px-2">
                    <i className="fa fa-eye"></i>
                </Link><Link to={`/updateProduct/${product._id}`} className="btn btn-warning py-1 px-2">
                <i class="fa fa-pencil"></i>
                </Link>
                </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Lista Productos'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Lista Productos</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>
àò
        </Fragment>
    )
}
export default ListProducts;
