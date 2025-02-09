const ADD_ITEM_WISHLIST = "add/item/wishlist";
const REMOVE_ITEM_WISHLIST = "remove/item/wishlist";

export function addItemWishList(productId) {
  return { type: ADD_ITEM_WISHLIST, payload: { id: productId } };
}
export function removeItemWishList(productId) {
  return { type: REMOVE_ITEM_WISHLIST, payload: { id: productId } };
}

function getElementIndex(state, action) {
  return state.findIndex((item) => item.id === action.payload.id);
}

export default function wishListReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    switch (action.type) {
      case ADD_ITEM_WISHLIST:
        if (getElementIndex(state, action) === -1) {
          state.push(action.payload);
        }
        return state;
      case REMOVE_ITEM_WISHLIST:
        if (getElementIndex(state, action) !== -1) {
          state.slice(getElementIndex(state, action), 1);
        }
      default:
        return state;
    }
  });
}
