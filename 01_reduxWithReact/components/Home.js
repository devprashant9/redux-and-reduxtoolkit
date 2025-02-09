import Products from "./Products";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.products);
  console.log(products)
  return (
    <div className="products-container">
      {products.map((product) => (
        <Products
          key={product.id}
          id={product.id}
          imageURL={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating.rate}
        />
      ))}
    </div>
  );
}

export default Home;
