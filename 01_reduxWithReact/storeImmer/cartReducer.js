import { produce } from "immer";

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM = "cart/increaseItem";
const CART_DECREASE_ITEM = "cart/decreaseItem";

export function cartAddItem(productData, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { ...productData, quantity },
  };
}
export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function cartIncreaseItem(productId, quantity = 1) {
  return {
    type: CART_INCREASE_ITEM,
    payload: { productId, quantity },
  };
}
export function cartDecreaseItem(productId, quantity = 1) {
  return {
    type: CART_DECREASE_ITEM,
    payload: { productId, quantity },
  };
}

function getElementIndex1(state, action) {
  return state.findIndex((item) => item.id === action.payload.id);
}

function getElementIndex2(state, action) {
  return state.findIndex((item) => item.id === action.payload.productId);
}

let elementIndex;
export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        elementIndex = getElementIndex1(state, action);
        if (elementIndex === -1) {
          state.push(action.payload);
          return state;
        } else {
          state[elementIndex].quantity += 1;
          return state;
        }
      case CART_REMOVE_ITEM:
        elementIndex = getElementIndex2(state, action);
        state.splice(elementIndex, 1);
        return state;

      case CART_INCREASE_ITEM:
        elementIndex = getElementIndex2(state, action);
        state[elementIndex].quantity += action.payload.quantity;
        return state;

      case CART_DECREASE_ITEM:
        elementIndex = getElementIndex2(state, action);
       
        if (elementIndex.quantity === 1) {
          state.splice(elementIndex, 1);
          return state;
        } else {
          state[elementIndex].quantity -= action.payload.quantity;
          return state;
        }

      default:
        return state;
    }
  });
}
