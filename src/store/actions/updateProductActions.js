import { UPDATE_PUBLISHED_PRODUCT, UPDATE_PRODUCT } from "../types"

export const updateProduct = (title, price, description, published) => {
    return async dispatch => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "PUT",
            body: JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    published: published
                }
            )
        })
        dispatch({ 
            type: UPDATE_PRODUCT, 
            payload: {
                title: title,
                price: price,
                description: description,
                published: published ? "+" : '',
                date: Date.now()
            } })
        dispatch({
            type: UPDATE_PUBLISHED_PRODUCT,
            payload: {
                title: title,
                price: price,
                description: description,
                published: published ? "+" : '',
                date: Date.now()
                }
            })
        const json = await response.json()
        console.log(json)
    }
}