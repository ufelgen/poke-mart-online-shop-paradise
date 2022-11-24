import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";

function App() {
  function handleAddToCart(id) {
    console.log(id);
  }

  return (
    <>
      <Header />
      <main>
        <Cart />
        <ShoppingItem onAddToCart={handleAddToCart} />
      </main>
    </>
  );
}

export default App;
