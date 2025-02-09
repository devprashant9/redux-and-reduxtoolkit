import { produce } from "immer";

const ADD_ITEM_CART = "add/item/cart";
const REMOVE_ITEM_CART = "remove/item/cart";
const INCREASE_ITEM_CART = "increase/item/cart";
const DECREASE_ITEM_CART = "decrease/item/cart";

export function addItemCart(productId) {
  return { type: ADD_ITEM_CART, payload: { id: productId, quantity: 1 } };
}

export function removeItemCart(productId) {
  return { type: REMOVE_ITEM_CART, payload: { id: productId, quantity: 1 } };
}

export function increaseItemCart(productId, quantity = 1) {
  return { type: INCREASE_ITEM_CART, payload: { id: productId, quantity } };
}

export function decreaseItemCart(productId, quantity = 1) {
  return { type: DECREASE_ITEM_CART, payload: { id: productId, quantity } };
}

function getElementIndex(state, action) {
  return state.findIndex((item) => item.id === action.payload.id);
}

export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    switch (action.type) {
      case ADD_ITEM_CART:
        if (getElementIndex(state, action) === -1) {
          state.push(action.payload);
        }
        return state;

      case REMOVE_ITEM_CART:
        if (getElementIndex(state, action) !== -1) {
          state.slice(getElementIndex(state, action), 1);
        }
        return state;

      case INCREASE_ITEM_CART:
        if (getElementIndex(state, action) !== -1) {
          state[getIndex].quantity += 1;
        }
        return state;

      case DECREASE_ITEM_CART:
        if (getElementIndex(state, action) !== -1) {
          state[getIndex].quantity += 1;
        }
        return state;

      default:
        return state;
    }
  });
}
