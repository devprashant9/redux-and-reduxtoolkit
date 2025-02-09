import { createStore } from "redux";
import { productsData } from "../productsData/productsData.js";

const complexState = {
  products: productsData,
  cartItems: [],
  wishList: [],
};

const ADD_ITEM_CART = "add/item/cart";
const REMOVE_ITEM_CART = "remove/item/cart";
const INCREASE_ITEM_CART = "increase/item/cart";
const DECREASE_ITEM_CART = "decrease/item/cart";

function updateStateReducer(state = complexState, action) {
  switch (action.type) {
    // ADD ITEM CART
    case ADD_ITEM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // REMOVE ITEM CART
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    // INCREASE ITEM CART
    case INCREASE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    // DECREASE ITEM CART
    case DECREASE_ITEM_CART:
      const getData = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (getData.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== getData.id),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
}

const store = createStore(updateStateReducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log("Initial State", store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: ADD_ITEM_CART,
  payload: { id: 1, quantity: 1 },
});

store.dispatch({
  type: ADD_ITEM_CART,
  payload: { id: 12, quantity: 1 },
});

store.dispatch({
  type: ADD_ITEM_CART,
  payload: { id: 3, quantity: 2 },
});

store.dispatch({
  type: REMOVE_ITEM_CART,
  payload: { id: 1 },
});

store.dispatch({
  type: INCREASE_ITEM_CART,
  payload: { id: 3 },
});

store.dispatch({
  type: INCREASE_ITEM_CART,
  payload: { id: 3 },
});

store.dispatch({
  type: INCREASE_ITEM_CART,
  payload: { id: 3 },
});

store.dispatch({
  type: DECREASE_ITEM_CART,
  payload: { id: 3 },
});

store.dispatch({
  type: DECREASE_ITEM_CART,
  payload: { id: 12 },
});
