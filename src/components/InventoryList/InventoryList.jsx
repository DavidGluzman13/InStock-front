import "./InventoryList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import Modal from "../Modal/Modal";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InventoryList() {
  const [warehouses, setInventories] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => setWarehouses(response.data));
  }, []);

  if (!warehouses) {
    return <h1>Loading..</h1>;
  }

  const handleDelete = () => {
    if (selectedWarehouse) {
      axios
        .delete(`http://localhost:8080/api/warehouses/${selectedWarehouse.id}`)
        .then((response) => {
          console.log("Warehouse deleted");
          axios
            .get("http://localhost:8080/api/warehouses")
            .then((response) => setWarehouses(response.data));

          setShowModal(false);
          setSelectedWarehouse(null);
        })
        .catch((error) => {
          console.error("Error deleting warehouse:", error);
          setShowModal(false);
          setSelectedWarehouse(null);
        });
      console.log("I m here");
    }
  };

  const openModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWarehouse(null);
  };

  return (
    <div className="il-component-wrapper">
      <section className="il-component">
        <div className="il-component__header">
          <h1 className="il-component__title h1">Warehouses</h1>
          <div className="il-component__header-container">
            <input
              className="il-component__header-input"
              type="text"
              placeholder="Search..."
            />
            <Link to="/warehouses/add" className="il-component__header-button">
              + Add New Warehouse
            </Link>
          </div>
        </div>
        <div className="il-component__body">
          <ul className="il-component__list">
            <div className="il-component__label-container">
              <div className="il-component__label-left">
                <div className="il-component__label-mini il-component__mini-container--medium ">
                  <h4>WAREHOUSE</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="il-component__label-mini il-component__mini-container--large">
                  <h4>ADDRESS</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="il-component__label-right">
                <div className="il-component__label-mini il-component__mini-container--medium">
                  <h4>CONTACT NAME</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="il-component__label-mini il-component__mini-container--xlarge">
                  <h4>CONTACT INFORMATION</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="il-component__label-icons il-component__mini-container--small">
                <h4>ACTIONS</h4>
              </div>
            </div>
            {warehouses.map((warehouse) => (
              <li key={warehouse.id} className="il-component__item">
                <div className="il-component__item-container il-component__item-container--left">
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--medium">
                    <h4 className="il-component__label">WAREHOUSE</h4>
                    <Link
                      to={`/warehouses/${warehouse.id}`}
                      className="il-component__data--arrow"
                    >
                      {warehouse.warehouse_name}
                      <img src={arrowIcon} alt="Arrow Icon" />
                    </Link>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--large">
                    <h4 className="il-component__label">ADDRESS</h4>
                    <p className="il-component__data">
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </p>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--delete">
                    <img
                      className="il-component__delete il-component__delete--mobile"
                      src={deleteIcon}
                      alt="Delete icon"
                      onClick={() => openModal(warehouse)}
                    />
                  </div>
                </div>
                <div className="il-component__item-container il-component__item-container--right">
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--medium">
                    <h4 className="il-component__label">CONTACT NAME</h4>
                    <p className="il-component__data">
                      {warehouse.contact_name}
                    </p>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--xlarge">
                    <h4 className="il-component__label">CONTACT INFORMATION</h4>
                    <div className="il-component__data">
                      <p>{warehouse.contact_phone}</p>
                      <p>{warehouse.contact_email}</p>
                    </div>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--edit">
                    <img
                      className="il-component__edit il-component__edit--mobile"
                      src={editIcon}
                      alt="Edit icon"
                    />
                  </div>
                </div>
                <div className="il-component__icons-holder il-component__mini-container--small">
                  <img
                    className="il-component__delete "
                    src={deleteIcon}
                    onClick={() => openModal(warehouse)}
                    alt="Delete icon"
                  />
                  <img
                    className="il-component__edit"
                    src={editIcon}
                    alt="Edit icon"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showModal && selectedWarehouse && (
        <Modal title={selectedWarehouse.warehouse_name} onClose={closeModal}>
          <div className="modal__buttons">
            <button
              className="modal__btn modal__btn--cancel"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="modal__btn modal__btn--delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
