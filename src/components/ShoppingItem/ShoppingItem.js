import { useEffect, useState } from "react";
import SingleShoppingItem from "../SingleShoppingItem/SingleShoppingItem";
import "./ShoppingItem.css";

export default function ShoppingItem({ onAddToCart }) {
  const [items, setItems] = useState([]);
  // const [buttonToggle, setButtonToggle] = useState(false);
  console.log(items);
  const url = "https://pokeapi.co/api/v2/item/";
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.results.map((element) => {
          element.disabled = false;
        });
        setItems(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, []);

  function onDisabled(urlDetails) {
    console.log("hat geklappt");
    items.map((item) => {
      console.log(item.url);
      if (item.url === urlDetails) {
        item.disabled = true;
        console.log("hat gekasdasdasd");
      }
    });
  }

  return (
    <ul>
      {items.map(({ url, name, disabled }) => (
        <SingleShoppingItem
          urlDetails={url}
          onAddToCart={onAddToCart}
          key={name}
          disabled={disabled}
          onDisabled={onDisabled}
          // buttonToggle={buttonToggle}
        />
      ))}
    </ul>
  );
}
