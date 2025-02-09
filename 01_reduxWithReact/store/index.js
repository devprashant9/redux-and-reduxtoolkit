import { createStore, combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishLists: wishListReducer,
});

export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());
