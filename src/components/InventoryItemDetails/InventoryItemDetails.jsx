import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryItemDetails.scss";

export default function InventoryItemDetails() {
  const url = "http://localhost:8080/api/inventories/";
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);

  useEffect(() => {
    axios
      .get(url + id)
      .then((response) => {
        setInventoryItem(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (inventoryItem === null) {
    return <div>Loading...</div>;
  } else {
    document.title = `InStock - Inventory Item Detail - ${inventoryItem.item_name}`;
  }

  return <h1>{inventoryItem.item_name}</h1>;
}
