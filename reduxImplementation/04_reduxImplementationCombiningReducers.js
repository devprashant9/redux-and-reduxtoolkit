import { combineReducers, createStore } from "redux";
import productsReducer from "../multiReducers/productsReducer";
import cartReducer, {
  ADD_ITEM_CART,
  DECREASE_ITEM_CART,
  INCREASE_ITEM_CART,
  REMOVE_ITEM_CART,
} from "../multiReducers/cartReducer";
import wishListReducer, {
  ADD_ITEM_WISHLIST,
  REMOVE_ITEM_WISHLIST,
} from "../multiReducers/wishListReducer";

const singleReducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(singleReducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State", store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_ITEM_CART, payload: { id: 4, quantity: 10 } });
store.dispatch({ type: ADD_ITEM_CART, payload: { id: 5, quantity: 10 } });
store.dispatch({ type: ADD_ITEM_CART, payload: { id: 15, quantity: 1 } });
store.dispatch({ type: ADD_ITEM_CART, payload: { id: 1, quantity: 1 } });
store.dispatch({ type: INCREASE_ITEM_CART, payload: { id: 1 } });
store.dispatch({ type: INCREASE_ITEM_CART, payload: { id: 15 } });
store.dispatch({ type: REMOVE_ITEM_CART, payload: { id: 5 } });
store.dispatch({ type: REMOVE_ITEM_CART, payload: { id: 1 } });
store.dispatch({ type: DECREASE_ITEM_CART, payload: { id: 15 } });
store.dispatch({ type: DECREASE_ITEM_CART, payload: { id: 15 } });
store.dispatch({ type: ADD_ITEM_WISHLIST, payload: { id: 5 } });
store.dispatch({ type: ADD_ITEM_WISHLIST, payload: { id: 6 } });
store.dispatch({ type: REMOVE_ITEM_WISHLIST, payload: { id: 5 } });
