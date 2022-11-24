import { useEffect, useState } from "react";

export default function ShoppingItem() {
  const url = "https://pokeapi.co/api/v2/item/";

  const [items, setItems] = useState([]);
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
      {items.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
