import { useState, useEffect } from "react";

export default function SingleShoppingItem({ urlDetails }) {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    sprites: {},
    cost: "",
  });
  console.log("itemDetails:  ", itemDetails);
  //const urlDetail = items.map((item) => item.url);

  // console.log("urlDetails: " + urlDetails);

  useEffect(() => {
    async function startFetchingDetails(urlDetails) {
      try {
        const responseDetails = await fetch(urlDetails);
        const dataDetails = await responseDetails.json();
        console.log("dataDetails: ", dataDetails);
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
      <img src={itemDetails.sprites?.default} />
      <p>{itemDetails.cost}</p>{" "}
    </li>
  );
}
