import { ADD_SINGLE_PRODUCT } from "../types"

export const addSingleProduct = (title, price, description, published) => {
    return async dispatch => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    published: published
                }
            )
        })
        const json = await response.json()
        setTimeout(() => {
            dispatch({ 
                type: ADD_SINGLE_PRODUCT, 
                payload: {
                    id: json.id,
                    title: title,
                    price: price,
                    description: description,
                    published: published,
                    date: Date.now()
                } })
        }, 500)
    }
}