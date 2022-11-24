import { CREATE_ORDER_FAIL } from "../constants/ordenConstants";
import { CLEAR_ERRORS } from "../constants/ordenConstants";
import { CREATE_ORDER_SUCCESS } from "../constants/ordenConstants";
import { CREATE_ORDER_REQUEST } from "../constants/ordenConstants";



 export const newOrderReducer = (state = {}, action)=>{
    switch (action.type){

        case CREATE_ORDER_REQUEST:
            return{
                ...state,
                loading: true
            }
            case CREATE_ORDER_SUCCESS:
                return{
                    loading:false,
                    success: action.payload.success,
                    order: action.payload
                }
            case CREATE_ORDER_FAIL:
                return{
                    loading: false,
                    error: action.payload
                }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
    
            default:
                return state;
        }
    }
