import { combineReducers, createStore } from "redux";
import productsReducer from "../multiReducers/productsReducer.js";
import cartReducer from "../multiReducers/cartReducer.js";
import wishListReducer from "../multiReducers/wishListReducer.js";

const singleReducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(singleReducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State", store.getState());

store.subscribe(() => console.log(store.getState()));
