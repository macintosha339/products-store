import { DELETE_PRODUCT, DELETE_PUBLISHED_PRODUCT } from "../types"

export const deleteProduct = (date) => {
    return async dispatch => {
        const response = await fetch('https://fakestoreapi.com/products/6', {
            method: "DELETE"
        })
        dispatch({ 
            type: DELETE_PRODUCT,
            payload: {
                date: date
            } 
        })
        dispatch({
            type: DELETE_PUBLISHED_PRODUCT,
            payload: {
                date: date
            }
        })
        const json = await response.json()
        console.log(json)
    }
}