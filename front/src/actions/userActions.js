import axios from "axios";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants"
//login
export const login = (email, password) => async (dispatch) =>{
    try{
        dispatch({type: LOGIN_REQUEST})
        
        const config={
            Headers: {
                 'Content-type': 'application/json'
                }
        }
        conts (data) = await axios.get('/api/login', {email, password},config)

        dispatch({
            type:LOGIN_SUCCESS,
            payload: data.user
        })

    }
    catch(error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })

    }
}
//clear error
export const clearErrors= () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })

}