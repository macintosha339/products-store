import { FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT, ADD_SINGLE_PRODUCT } from "../types"

const initialState = {
    products: [],
    fetchedProducts: [],
    productInfo: []
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {...state, fetchedProducts: action.payload}
        case FETCH_SINGLE_PRODUCT:
            return {...state, productInfo: action.payload}
        case ADD_SINGLE_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        default: return state
    }
}