import { categories } from "../../data/categories";
import { actionsTypes } from "../actions/ActionsType";

const initialState = {
    products: [],
    categories: [],
    isLoading: true
}
export const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionsTypes.FETCH_PRODUCTS:
            //statement
            return { ...state, products: payload, isLoading: false }
        case actionsTypes.FETCH_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state

    }
}