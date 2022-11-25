import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  function handleAddToCart(id, object) {
    // console.log(id, object);
    setCart([object, ...cart]);
  }

  return (
    <>
      <Header shopName={"Poke Paradise Online Shop"} />
      <main>
        <Cart array={cart} />
        <ShoppingItem onAddToCart={handleAddToCart} />
      </main>
    </>
  );
}

export default App;
