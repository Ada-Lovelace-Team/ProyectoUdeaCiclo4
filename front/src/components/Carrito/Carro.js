import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

export const Carro = () => {
  const [quantity, setQuantity] = useState(1)

  const increaseQty = () => {
      const contador = document.querySelector('.count')
      const qty = contador.valueAsNumber+1;
      setQuantity(qty)
   }

   const decreaseQty = () => {
    const contador = document.querySelector('.count')

    const qty = contador.valueAsNumber-1;
    setQuantity(qty)
 }

  
 let cartItems=[
      {
          "_id": "635c2727a7f6de1e6c5c0c2b",
          "nombre": "Tennis Galaxy 20",
          "precio": 300000,
          "talla": 39,
          "imagen": "./imagenes/productos/m1.webp",
          "inventario": 30,
      },
      {
        "_id": "635c2727a7f6de1e6c5c0c2b",
        "nombre": "Tennis Galaxy",
        "precio": 20000,
        "talla": 30,
        "imagen": "./imagenes/productos/m2.webp",
        "inventario": 30,
      },
      {
        "_id": "635c2727a7f6de1e6c5c0c2c",
        "nombre": "Galaxy 20",
        "precio": 40000,
        "talla": 40,
        "imagen": "./imagenes/productos/m3.webp",
        "inventario": 100,
      },
      {
        "_id": "635c2727a7f6de1e6c5c0c2b",
        "nombre": "Tennis ULTRABOOST",
        "precio": 3000,
        "talla": 28,
        "imagen": "./imagenes/productos/m4.webp",
        "inventario": 30,
      }
  ]

cartItems = Array.from(cartItems);

  return (
      <Fragment>
          <MetaData title={'Your Cart'} />
          

          {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
              <Fragment>
                  
                  <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                  <div className="row d-flex justify-content-between">
                      <div className="col-12 col-lg-8">

                      {cartItems && cartItems.map (item => (
                              <Fragment>
                                  <hr />

                                  <div className="cart-item" key={item.nombre}>
                                      <div className="row">
                                          <div className="col-4 col-lg-3">
                                              <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                          </div>

                                          <div className="col-5 col-lg-3">
                                              <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                          </div>
                                          <div className="col-5 col-lg-3">
                                              <Link to={`/producto/${item._id}`}>{item.talla}</Link>
                                          </div>


                                          <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                              <p id="card_item_price">${item.precio}</p>
                                          </div>

                                          <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                              <div className="stockCounter d-inline">
                                                  <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                                  <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                  <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                              </div>
                                          </div>

                                          <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                              <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                          </div>

                                      </div>
                                  </div>
                                  <hr />
                              </Fragment>
                          
                      ))}
                      </div>

                      <div className="col-12 col-lg-3 my-4">
                          <div id="order_summary">
                              <h4>Total de la Compra</h4>
                              <hr />
                              <p>Subtotal:  <span className="order-summary-values">$1.000.000</span></p>
                              <p>Est. total: <span className="order-summary-values">$950.000</span></p>

                              <hr />
                              <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                          </div>
                      </div>
                  </div>
              </Fragment>
          )}
      </Fragment>
  )
}
export default Carro