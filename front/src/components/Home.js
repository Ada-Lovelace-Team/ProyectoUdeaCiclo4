import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(getProducts());

    },[dispatch])
  return (
    <Fragment>
        <MetaData title="El placer de la comodidad"></MetaData>
        <h1 id="encabezado_productos">Nuevos modelos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref1.jpeg' alt="Zapato deportivo Adidas"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Deportiva running Elektra UTWO</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> 
                                Ver detalle
                               </a>
                            </div>
                       </div>
                    </div>
            {/*Producto 2*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref2.jpeg' alt="Zapato SKECHERS FLEX ADVANTAGE 2.0"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Zapato SKECHERS FLEX ADVANTAGE 2.0</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 10 reviews</span>
                                </div>
                                <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
             {/*Producto 3*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref3.jpeg' alt="Zapato básica plataforma NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Zapato básica plataforma NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 10 reviews</span>
                                </div>
                                <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 4*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref4.jpeg' alt="Zapato básica plataforma NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Zapato básica plataforma NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 10 reviews</span>
                                </div>
                                <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 5*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref5.jpeg' alt="Sport plataforma NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Sport plataforma NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 20 reviews</span>
                                </div>
                                <p className='card-text'>$300.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                 {/*Producto 6*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref6.webp' alt="Tenis básica NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Tenis básica NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 15 reviews</span>
                                </div>
                                <p className='card-text'>$400.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                 {/*Producto 7*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref7.webp' alt="Running ágora UTWO"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Running ágora UTWO</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 15 reviews</span>
                                </div>
                                <p className='card-text'>$400.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 8*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref8.webp' alt="Sport basic NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Sport basic NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$500.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 9*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref9.webp' alt="Sport basic NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Sport basic NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 10 reviews</span>
                                </div>
                                <p className='card-text'>$299.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 10*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref10.jpeg' alt="Tennis KECHERS SUMMIT"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Tennis KECHERS SUMMIT</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 20 reviews</span>
                                </div>
                                <p className='card-text'>$99.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 11*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref11.webp' alt="Tennis KECHERS SUMMIT ultima referencia"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Tennis KECHERS SUMMIT ultima referencia</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 19 reviews</span>
                                </div>
                                <p className='card-text'>$390.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 12*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref12.jpeg' alt="Tennis sporty NYC"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Tennis sporty NYC</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 30 reviews</span>
                                </div>
                                <p className='card-text'>$400.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 13*/}
             <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./imagenes/ref13.jpeg' alt="Tennis trekking UTWO"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="Titulo_producto"><a href ='http://localhost:3000'>Tennis trekking UTWO</a></h5>
                            <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 27 reviews</span>
                                </div>
                                <p className='card-text'>$500.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'> Ver detalle
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    </Fragment>
  )
}

export default Home