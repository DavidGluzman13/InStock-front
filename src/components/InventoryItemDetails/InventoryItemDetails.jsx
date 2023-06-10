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
  const [warehouseName, setWarehouseName] = useState(null);

  const cl = (className) => `className=${className}`;

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
        return response.data;
      })
      .then((inventoryItem) => {
        axios
          .get(
            `http://localhost:8080/api/warehouses/${inventoryItem.warehouse_id}`
          )
          .then((response) => {
            setWarehouseName(response.data.warehouse_name);
          });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setInventoryItem({ item_name: "Item not found" });
          setWarehouseName("");
        }
      });
  }, [id]);

  if (inventoryItem === null || warehouseName === null) {
    return <div>Loading...</div>;
  } else {
    document.title = `InStock - Inventory Item Detail - ${inventoryItem.item_name}`;
  }

  if (inventoryItem.item_name === "Item not found") {
    return (
      <div className="itd-component-wrapper">
        <div className="itd-component">
          <section className="itd-component__header">
            <div className="header-start">
              <a className="back-link" onClick={navigateBack}>
                <img src={backButton} alt="back button" />
              </a>
              <h1 className="itd-component__title">
                {inventoryItem.item_name}
              </h1>
            </div>
          </section>
        </div>
      </div>
    );
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
            <button className="edit-button" onClick={navigateToEdit}>
              <img
                src={editButton}
                alt="edit icon"
                className="edit-button__icon"
              />
              <span className="edit-button__text">Edit</span>
            </button>
          </div>
        </section>
        <section className="itd-component__body">
          <div className="body-start">
            <div className="row">
              <h4 className="detail-title">ITEM DESCRIPTION:</h4>
              <p className="detail-text">{inventoryItem.description}</p>
            </div>
            <div className="row row--no-padding-tablet">
              <h4 className="detail-title">CATEGORY:</h4>
              <p className="detail-text">{inventoryItem.category}</p>
            </div>
          </div>
          <div className="body-end">
            <div className="row">
              <div className="columns">
                <div className="column">
                  <h4 className="detail-title">STATUS:</h4>
                  <div className="tag-wrapper">
                    <span
                      className={`detail-text ${
                        inventoryItem.status === "Out of Stock"
                          ? "detail-text--tag-red"
                          : "detail-text--tag-green"
                      }`}
                    >
                      {inventoryItem.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="column">
                  <h4 className="detail-title">QUANTITY:</h4>
                  <p className="detail-text">{inventoryItem.quantity}</p>
                </div>
              </div>
            </div>
            <div className="row row--no-padding-tablet">
              <h4 className="detail-title">WAREHOUSE:</h4>
              <p className="detail-text">{warehouseName}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
