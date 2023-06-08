import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InventoryItemDetails.scss";
import backButton from "../../assets/Icons/arrow_back-24px.svg";

export default function InventoryItemDetails() {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/inventories/";
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);

  const navigateBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

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

  return (
    <div className="itd-component-wrapper">
      <div className="itd-component">
        <section className="itd-component__header">
          <div className="header-start">
            <button onClick={navigateBack}>
              <img src={backButton} alt="back button" className="back-button" />
            </button>
            <h1 className="itd-component__title">{inventoryItem.item_name}</h1>
          </div>
          <div className="header-end"></div>
        </section>
        <section className="itd-component__body"></section>
      </div>
    </div>
  );
}
