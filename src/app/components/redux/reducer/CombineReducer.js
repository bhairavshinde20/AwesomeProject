import { combineReducers } from "redux";
import CartReducer from "./Reducers";
import ProductReducer from "./Product"

export default combineReducers({
   cart: CartReducer,
   product: ProductReducer
})