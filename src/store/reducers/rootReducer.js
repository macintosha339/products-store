import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    app: appReducer
})