import { createStore, combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer, {
  cartAddItem,
  cartDecreaseItem,
  cartIncreaseItem,
  cartRemoveItem,
} from "./cartReducer";
import wishListReducer, {
  wishlistAddItem,
  wishlistRemoveItem,
} from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishLists: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch(
  cartAddItem({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  })
);

store.dispatch(
  cartAddItem({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  })
);

store.dispatch(
  cartAddItem({
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  })
);

store.dispatch(cartRemoveItem(3));

store.dispatch(cartIncreaseItem(1, 5));
store.dispatch(cartDecreaseItem(1, 2));

store.dispatch(
  wishlistAddItem({
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  })
);

store.dispatch(
  wishlistAddItem({
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  })
);

store.dispatch(wishlistRemoveItem(5));
