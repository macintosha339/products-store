import { FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT, ADD_SINGLE_PRODUCT, ADD_PUBLISHED_PRODUCT, SHOW_PUBLISHED, SHOW_ALL } from "../types"

const initialState = {
    products: [],
    fetchedProducts: [],
    productInfo: [],
    publishedProducts: [],
    showPublished: false
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {...state, fetchedProducts: action.payload}
        case FETCH_SINGLE_PRODUCT:
            return {...state, productInfo: action.payload}
        case ADD_SINGLE_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case ADD_PUBLISHED_PRODUCT:
            return {...state, publishedProducts: [...state.publishedProducts, action.payload]}
        case SHOW_PUBLISHED:
            return {...state, showPublished: true}
        case SHOW_ALL:
            return {...state, showPublished: false}
        default: return state
    }
}