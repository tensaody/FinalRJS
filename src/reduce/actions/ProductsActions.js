import { base_URL } from "../../utils/constand"
import { actionsTypes } from "./ActionsType"

export const fetchAllProducts = () => {
    return (dispatch) => {
        fetch(`${base_URL}products`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionsTypes.FETCH_PRODUCTS,
            payload: resp
        }))
        .catch(er => console.log('fetch product error: ', er))
    }
}

export const fetchAllCategories = () => {
    return (dispatch) => {
        fetch(`${base_URL}categories`)
        .then(resp => resp.json())
        .then(resp => dispatch({
            type: actionsTypes.FETCH_CATEGORIES,
            payload: resp
        }))
        .catch(er => console.log('failed to fetch: ', er))
    }
}