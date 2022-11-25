import { useState, useEffect } from "react";
import "./SingleShoppingItem.css";

export default function SingleShoppingItem({ urlDetails, onAddToCart }) {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    sprites: {},
    cost: "",
    id: "",
  });
  // console.log(onAddToCart);
  //console.log("itemDetails: Pommes  ", itemDetails);
  //const urlDetail = items.map((item) => item.url);

  // console.log("urlDetails: " + urlDetails);

  useEffect(() => {
    async function startFetchingDetails(urlDetails) {
      try {
        const responseDetails = await fetch(urlDetails);
        const dataDetails = await responseDetails.json();
        // console.log("dataDetails: ", dataDetails);
        setItemDetails(dataDetails);
      } catch (error) {
        console.error("du kannst gar nichts");
      }
    }
    startFetchingDetails(urlDetails);
  }, []);

  return (
    <li>
      <h2>{itemDetails.name}</h2>
      <img alt="pokepommes" src={itemDetails.sprites?.default} />
      <p>Price: {itemDetails.cost}</p>{" "}
      <button
        type="button"
        //{(pommes === true) ? disabled : ""}
        // disabled={false}
        // cart array hier hin, vergleichen der itemdetails.id > button 1 anzeigen oder Button 2 disabled
        onClick={() => onAddToCart(itemDetails.id, itemDetails)}
      >
        kaufen
      </button>
    </li>
  );
}
