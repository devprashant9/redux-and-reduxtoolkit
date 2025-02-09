import { useSelector } from "react-redux";
import cartIcon from "../assets/cart-icon.svg";
import heartIcon from "../assets/heart-icon.svg";
import { Link } from "react-router";

function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishLists = useSelector((state) => state.wishLists);
  return (
    <div className="header-container">
      <Link to={"/"}>
        <div className="title">
          <h1>Shoppee</h1>
        </div>
      </Link>
      <div className="actions">
        <Link to={"/cart"}>
          <div className="image-container">
            <img src={cartIcon} alt={cartIcon} />
            <p className="cart-count">
              {cartItems.reduce(
                (accumulator, product) => product.quantity + accumulator,
                0
              )}
            </p>
          </div>
        </Link>

        <Link to={"/wishlist"}>
          <div className="image-container">
            <img src={heartIcon} alt={heartIcon} />
            <p className="wishlist-count">{wishLists.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
