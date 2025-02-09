import React from "react";
import { useDispatch } from "react-redux";
import {
  cartDecreaseItem,
  cartIncreaseItem,
  cartRemoveItem,
} from "../store/cartReducer";

function CartItems({
  imageURL,
  title,
  description,
  price,
  quantity = 1,
  productId,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-product-details">
        <div className="cart-image">
          <img src={imageURL} alt={imageURL} />
        </div>
        <div className="product-details">
          <div className="cart-product-title">{title.substring(0, 20)}</div>
          <div className="cart-product-description">
            {description.substring(0, 30)}
          </div>
        </div>

        <div className="cart-product-quantity">
          <button
            className="quantity-button"
            onClick={() => dispatch(cartIncreaseItem(productId))}
          >
            +
          </button>
          <div>{quantity}</div>
          <button
            className="quantity-button"
            onClick={() => dispatch(cartDecreaseItem(productId))}
          >
            -
          </button>
        </div>
        <div className="cart-product-delete">
          <button
            className="delete-button"
            onClick={() => dispatch(cartRemoveItem(productId))}
          >
            Delete
          </button>
        </div>
        <div className="cart-product-price">${Math.floor(price * quantity)}</div>
      </div>
    </>
  );
}

export default CartItems;
