import { combineReducers, createStore } from "redux";
import productsReducer from "./multiReducers/productsReducer";
import cartReducer from "./multiReducers/cartReducer";
import wishListReducer from "./multiReducers/wishListReducer";
import { addItemCart, removeItemCart, increaseItemCart, decreaseItemCart } from "./multiReducersMutating/cartReducer";
import { addItemWishList, removeItemWishList } from "./multiReducersMutating/wishListReducer";

const singleReducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(singleReducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State", store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch(addItemCart(4));
store.dispatch(addItemCart(14));
store.dispatch(addItemCart(3));

store.dispatch(removeItemCart(14));

store.dispatch(increaseItemCart(3));
store.dispatch(increaseItemCart(3));

store.dispatch(decreaseItemCart(3));
store.dispatch(decreaseItemCart(3));

store.dispatch(addItemWishList(15));
store.dispatch(addItemWishList(10));
store.dispatch(addItemWishList(5));
store.dispatch(removeItemWishList(5));
