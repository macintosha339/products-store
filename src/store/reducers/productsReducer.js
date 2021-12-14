import { 
    FETCH_PRODUCTS, 
    FETCH_SINGLE_PRODUCT, 
    ADD_SINGLE_PRODUCT, 
    ADD_PUBLISHED_PRODUCT, 
    SHOW_PUBLISHED, 
    SHOW_ALL, 
    GET_DATE, 
    UPDATE_PRODUCT, 
    UPDATE_PUBLISHED_PRODUCT, 
    DELETE_PRODUCT, 
    DELETE_PUBLISHED_PRODUCT 
} from "../types"

const initialState = {
    products: [],
    fetchedProducts: [],
    productInfo: [],
    publishedProducts: [],
    showPublished: false,
    getDate: null
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
        case GET_DATE:
            return {...state, getDate: action.payload}
        case UPDATE_PRODUCT:
            return {...state, products: state.products.map((product) => {
                if(product.date === state.getDate) {
                    return action.payload
                }
                return product
            })}
        case UPDATE_PUBLISHED_PRODUCT:
            return {...state, publishedProducts: state.products.filter((product) => product.published === "+")}
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter((product) => state.getDate !== product.date)}
        case DELETE_PUBLISHED_PRODUCT:
            return {...state, publishedProducts: state.publishedProducts.filter((product) => state.getDate !== product.date)}
        default: return state
    }
}