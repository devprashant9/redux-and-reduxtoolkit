import { combineReducers, createStore } from "redux";
import productsReducer from "./multiReducers/productsReducer";
import cartReducer from "./multiReducers/cartReducer";
import wishListReducer from "./multiReducers/wishListReducer";

const singleReducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(singleReducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State", store.getState());

store.subscribe(() => console.log(store.getState()));
