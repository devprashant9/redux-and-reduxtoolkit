// export const ADD_ITEM_WISHLIST = "add/item/wishlist";
// export const REMOVE_ITEM_WISHLIST = "remove/item/wishlist";

// Action Creators
const ADD_ITEM_WISHLIST = "add/item/wishlist";
const REMOVE_ITEM_WISHLIST = "remove/item/wishlist";

export function addItemWishList(productId) {
  return { type: ADD_ITEM_WISHLIST, payload: { id: productId } };
}
export function removeItemWishList(productId) {
  return { type: REMOVE_ITEM_WISHLIST, payload: { id: productId } };
}

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    // REMOVE ITEM WISHLIST
    case ADD_ITEM_WISHLIST:
      return [...state, action.payload];

    // REMOVE ITEM WISHLIST
    case REMOVE_ITEM_WISHLIST:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
