import { FETCH_PRODUCTS } from "../types"
import { hideLoader, showLoader } from "./loaderActions"

export const fetchFewProducts = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://fakestoreapi.com/products?limit=8')
        const json = await response.json()
        setTimeout(() => {
            dispatch({ type: FETCH_PRODUCTS, payload: json })
            dispatch(hideLoader())
        }, 500)
    }
}

export const fetchMoreProducts = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://fakestoreapi.com/products?limit=16')
        const json = await response.json()
        setTimeout(() => {
            dispatch({ type: FETCH_PRODUCTS, payload: json })
            dispatch(hideLoader())
        }, 500)
    }
}

export const fetchAllProducts = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        setTimeout(() => {
            dispatch({ type: FETCH_PRODUCTS, payload: json })
            dispatch(hideLoader())
        }, 500)
    }
}