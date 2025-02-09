import { useDispatch } from "react-redux";
import { cartAddItem } from "../store/cartReducer";
import { wishlistAddItem } from "../store/wishListReducer";

function Products({ id, imageURL, title, description, price, rating }) {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageURL} alt={imageURL} />
      </div>
      <div className="product-title">{title.substring(0, 20)}</div>
      <div className="product-description">
        {description.substring(0, 20)}...
      </div>
      <div className="price">
        <span className="span-class">Price: </span>${price}
      </div>
      <div className="rating">
        <span className="span-class">Rating: </span>
        {rating} ⭐⭐⭐⭐⭐
      </div>
      <div className="product-options">
        <button
          className="product-button"
          onClick={() =>
            dispatch(cartAddItem({ id, imageURL, title, description, price }))
          }
        >
          Add To Cart
        </button>
        <button
          className="product-button"
          onClick={() =>
            dispatch(wishlistAddItem({ id, imageURL, title, description }))
          }
        >
          Add To WishList
        </button>
      </div>
    </div>
  );
}

export default Products;
