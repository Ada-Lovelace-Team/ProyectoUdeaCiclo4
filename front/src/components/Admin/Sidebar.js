import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">

                    <li>
                        <Link to="/Dashboard"><i className="fa fa-tachometer"></i> Administración</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/listaProductos"><i className="fa fa-clipboard"></i> Lista productos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Agregar producto</Link>
                            </li>

                            <li>
                                <Link to="/modProducto"><i className="fa fa-clipboard"></i> Modificar producto</Link>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <Link to="/Home"><i className="fa fa-shopping-basket"></i> Lista de pedidos</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li>
                        <Link to="/admin/feedback"><i className="fa fa-star"></i>Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
