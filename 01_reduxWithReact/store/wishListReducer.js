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

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];

    case WISHLIST_REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.productId);

    default:
      return state;
  }
}
