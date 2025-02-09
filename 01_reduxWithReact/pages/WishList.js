import { useSelector } from "react-redux";
import WishListItems from "../components/WishListItems";

function WishList() {
  const wishLists = useSelector((state) => state.wishLists);
  return (
    <div className="wishlist-container" key={crypto.randomUUID()}>
      <h1>Items In Your WishList</h1>
      <div className="wishlist-heading">
        <h3>Image</h3>
        <h3>Description</h3>
        <h3>Remove Item</h3>
      </div>
      {wishLists.map((product) => (
        <WishListItems
          key={product.id}
          imageURL={product.imageURL}
          title={product.title}
          description={product.description}
          productId={product.id}
        />
      ))}
    </div>
  );
}

export default WishList;
