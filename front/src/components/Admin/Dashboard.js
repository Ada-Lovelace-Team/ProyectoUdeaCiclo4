import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-12 col-md-9'>
                    <h1 className='my-4'><center>Panel de control </center></h1>
                    <Fragment>
                        <MetaData title={"Panel de Control"} />
                        <div className='row pr-4'>

                            { /*Tarjeta1 */}


                            <div className='col-xl-12 col-l-6 mb-3'>
                                <div className='card text-white bg-secondary o-hidden-h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-front-size'>Total Ventas<br /><b>$50,0000</b>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/">
                                                <span className='float-left'> <center></center></span>
                                                <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            

                            { /*Tarjeta2 */}


                            <div className='col-xl-12 col-l-6 mb-3'>
                                <div className='card text-white bg-secondary o-hidden-h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-front-size'>Inventario<br /><b>2500</b>
                                        <div></div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/">
                                                <span className='float-left'></span>
                                                <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            { /*Tarjeta3 */}


                            <div className='col-xl-12 col-l-6 mb-3'>
                                <div className='card text-white bg-secondary o-hidden-h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-front-size'>Cantidad de vendidas<br /><b>100</b>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/">
                                            <span className='float-left'></span>
                                            <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                        </Link>



                                    </div>
                                </div>
                            </div>


                            { /*Tarjeta4 */}


                            <div className='col-xl-12 col-l-6 mb-3'>
                                <div className='card text-white bg-secondary o-hidden-h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-front-size'>Usuarios registrados<br /><b>1000</b>
                                            <Link className="card-footer text-white clearfix small z-1" to="/">
                                                <span className='float-left'></span>
                                                <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            { /*Tarjeta5 */}


                            <div className='col-xl-12 col-l-6 mb-3'>
                                <div className='card text-white bg-secondary o-hidden-h-100'>
                                    <div className='card-body'>
                                        <div className='text-center card-front-size'>Productos Agotados<br /><b>$40</b>
                                            <Link className="card-footer text-white clearfix small z-1" to="/">
                                                <span className='float-left'></span>
                                                <span className='float-right'><i className='fa fa-angle-right'></i></span>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Fragment>
                </div >
            </div >

        </Fragment >
    )
}
