export const ADD_ITEM_CART = "add/item/cart";
export const REMOVE_ITEM_CART = "remove/item/cart";
export const INCREASE_ITEM_CART = "increase/item/cart";
export const DECREASE_ITEM_CART = "decrease/item/cart";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    // ADD ITEM CART
    case ADD_ITEM_CART:
      return [...state, action.payload];

    // REMOVE ITEM CART
    case REMOVE_ITEM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    // INCREASE ITEM CART
    case INCREASE_ITEM_CART:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    // DECREASE ITEM CART
    case DECREASE_ITEM_CART:
      const getData = state.find((item) => item.id === action.payload.id);

      if (getData.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
}
