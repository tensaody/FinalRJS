// import React from 'react'
// import { base_URL } from '../../utils/constand'
// import { json } from 'react-router-dom'
// import { actionsTypes } from './ActionsType'

import axios from "axios"
import { base_URL } from "../../utils/constand"
import { actionsTypes } from "./ActionsType"
import secureLocalStorage from "react-secure-storage"

// export default function authActions() {
//   return (dispatch) => {
//     fetch(`${base_URL}auth/login`,{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"  
//         },
//         body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(resp => dispatch({
//         type: actionsTypes.LOGIN_SUCESS,
//         payload: resp
//     }))
    
//   }
// }
// ******************************************************************

export const loginUser = (user) => {
  return (dispatch) => {
    axios(`${base_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(user)

    })
    
    .then(resp => {
      if(resp.status ==201){
        secureLocalStorage.setItem('auth', resp.data)
        dispatch({
          type: actionsTypes.LOGIN_SUCESS,
          payload: resp
        })
        return Promise.resolve()
      }
    })
    return Promise.resolve()
  }
}

export const logout = () => {
  return (dispatch) => {
    secureLocalStorage.removeItem("auth")
    dispatch({
      type: actionsTypes.LOGOUT,
      payload: null
    })
    return Promise.resolve()
  }
}
