// import { actionsTypes } from "../actions/ActionsType"

import secureLocalStorage from "react-secure-storage"
import { actionsTypes } from "../actions/ActionsType"

// export const authReducer = (state = initialState, action) =>{
//     const {type, payload} = action
//     switch(type){
//         case actionsTypes.LOGIN_SUCESS:
//             return{...state, isLogin: true, auth: payload}
//             default:
//                 return state
//     }
// }
// ***************************************************
const auth = secureLocalStorage.getItem('auth')
const initialState = auth ? {isLogin: true, auth: auth} : {isLogin: false, auth: null}
// const initialState = {
//     isLogin: false,
//     auth: null
// }
export const authReducer = (state = initialState, action)=> {
    const {type, payload} = action
    switch(type){
        case actionsTypes.LOGIN_SUCESS:
            return{...state, isLogin: true, auth: payload}
            case actionsTypes.LOGOUT:
                return{...state, isLogin: false, auth: payload}
            default:
                return state
    }
}

