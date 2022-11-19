import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer,productDetailsReducer } from './reducer/productReducer';
import { authReducer } from './reducer/authReducer';
import { cartReducer } from './reducer/cartReducer';

const reducer= combineReducers ({
    products:productsReducer,
    ProductDetails: productDetailsReducer,
    auth: authReducer,
    cart:cartReducer

})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    }
        


}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;