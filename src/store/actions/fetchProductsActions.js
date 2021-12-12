import { FETCH_PRODUCTS } from "../types"
import { hideLoader, showLoader } from "./loaderActions"

export const fetchProducts = (limit) => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch(`https://fakestoreapi.com/products${limit}`)
        const json = await response.json()
        setTimeout(() => {
            dispatch({ type: FETCH_PRODUCTS, payload: json })
            dispatch(hideLoader())
        }, 500)
    }
}