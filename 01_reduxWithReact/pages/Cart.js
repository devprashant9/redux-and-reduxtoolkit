import React from "react";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <div className="cart-container" key={crypto.randomUUID()}>
      <h1>Items In Your Cart</h1>
      <div className="cart-heading">
        <h3>Image</h3>
        <h3>Description</h3>
        <h3>Quantity</h3>
        <h3>Remove Item</h3>
        <h3>Total</h3>
      </div>
      {cartItems.map((product) => (
        <CartItems
          key={product.id}
          imageURL={product.imageURL}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          productId={product.id}
        />
      ))}
      <div className="items-total">
        Total: $
        {cartItems.reduce(
          (accumulator, product) =>
            accumulator + Math.floor(product.price * product.quantity),
          0
        )}
      </div>
    </div>
  );
}

export default Cart;
