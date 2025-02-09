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

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const getElement1 = state.find((item) => item.id === action.payload.id);
      if (!getElement1) {
        return [...state, action.payload];
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case CART_REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.productId);

    case CART_INCREASE_ITEM:
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );

    case CART_DECREASE_ITEM:
      const getItem = state.find((item) => item.id === action.payload.id);
      if (getItem.quantity === 1) {
        state.filter((item) => item.id !== getItem.id);
      }
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: item.quantity - action.payload.quantity }
          : item
      );

    default:
      return state;
  }
}