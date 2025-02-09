import { produce } from "immer";
const WISHLIST_ADD_ITEM = "wishlist/addItem";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

export function wishlistAddItem(productsData) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: productsData,
  };
}
export function wishlistRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

function getElementIndex1(state, action) {
  return state.findIndex((item) => item.id === action.payload.id);
}

function getElementIndex2(state, action) {
  return state.findIndex((item) => item.id === action.payload.productId);
}

let elementIndex;
export default function wishListReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        elementIndex = getElementIndex1(state, action);
        if (elementIndex === -1) {
          state.push(action.payload);
          return state;
        } else {
          state[elementIndex].quantity += 1;
          return state;
        }

      case WISHLIST_REMOVE_ITEM:
        elementIndex = getElementIndex2(state, action);
        state.splice(elementIndex, 1);
        return state;

      default:
        return state;
    }
  });
}
