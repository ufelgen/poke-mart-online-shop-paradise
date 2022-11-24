import { useEffect, useState } from "react";
import SingleShoppingItem from "../SingleShoppingItem/SingleShoppingItem";
import "./ShoppingItem.css";

export default function ShoppingItem() {
  const [items, setItems] = useState([]);

  const url = "https://pokeapi.co/api/v2/item/";

  //console.log(items);
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setItems(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, []);

  return (
    <ul>
      {items.map(({ url }) => (
        <SingleShoppingItem urlDetails={url} />
      ))}
    </ul>
  );
}
