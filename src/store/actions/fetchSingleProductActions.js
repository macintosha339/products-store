import { FETCH_SINGLE_PRODUCT } from "../types";
import { hideLoader, showLoader } from "./loaderActions";

export const fetchSingleProduct = (pathname) => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch(`https://fakestoreapi.com${pathname}`)
        const json = await response.json()
        setTimeout(() => {
            dispatch({ type: FETCH_SINGLE_PRODUCT, payload: json })
            dispatch(hideLoader())
        }, 500)
    }
}