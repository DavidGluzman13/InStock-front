import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InventoryItemDetails.scss";
import backButton from "../../assets/Icons/arrow_back-24px.svg";
import editButton from "../../assets/Icons/edit-24px-white.svg";

export default function InventoryItemDetails() {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/inventories/";
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);

  const navigateBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  const navigateToEdit = (event) => {
    event.preventDefault();
    navigate(`/inventories/${id}/edit`);
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
            <a className="back-link" onClick={navigateBack}>
              <img src={backButton} alt="back button" />
            </a>
            <h1 className="itd-component__title">{inventoryItem.item_name}</h1>
          </div>
          <div className="header-end">
            <a className="edit-link" onClick={navigateToEdit}>
              <img
                src={editButton}
                alt="edit button"
                className="edit-link__button"
              />
            </a>
          </div>
        </section>
        <section className="itd-component__body"></section>
      </div>
    </div>
  );
}
