import React from "react";
import { useDispatch } from "react-redux";
import { wishlistRemoveItem } from "../store/wishListReducer";

function WishListItems({ imageURL, title, description, productId }) {
    const dispatch = useDispatch();
  return (
    <>
      <div className="wishlist-product-details">
        <div className="cart-image">
          <img src={imageURL} alt={imageURL} />
        </div>
        <div className="product-details">
          <div className="cart-product-title">{title.substring(0, 20)}</div>
          <div className="cart-product-description">
            {description.substring(0, 30)}
          </div>
        </div>

        <div className="cart-product-delete">
          <button className="delete-button" onClick={() => dispatch(wishlistRemoveItem(productId))}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default WishListItems;
