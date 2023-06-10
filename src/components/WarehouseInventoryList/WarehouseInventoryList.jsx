import "./WarehouseInventoryList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WarehouseInventoryList({ currentWarehouse }) {
  const [inventories, setInventories] = useState(null);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/warehouses/${currentWarehouse.id}/inventories`
      )
      .then((response) => {
        setInventories(response.data);
      });
  }, []);

  if (!inventories) {
    return <h1>Loading..</h1>;
  }

  const handleDelete = () => {
    if (selectedInventory) {
      axios
        .delete(`http://localhost:8080/api/inventories/${selectedInventory.id}`)
        .then((response) => {
          console.log("Inventory deleted");
          axios
            .get("http://localhost:8080/api/inventories")
            .then((response) => setInventories(response.data));

          setShowModal(false);
          setSelectedInventory(null);
        })
        .catch((error) => {
          console.error("Error deleting inventory:", error);
          setShowModal(false);
          setSelectedInventory(null);
        });
    }
  };

  const openModal = (inventory) => {
    setSelectedInventory(inventory);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInventory(null);
  };

  return (
    <>
      <section className="wil-component">
        <div className="wil-component__body">
          <ul className="wil-component__list">
            <div className="wil-component__label-container">
              <div className="wil-component__label-left">
                <div className="wil-component__label-mini wil-component__mini-container--large ">
                  <h4>INVENTORY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="wil-component__label-mini wil-component__mini-container--large">
                  <h4>CATEGORY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="wil-component__label-right">
                <div className="wil-component__label-mini wil-component__mini-container--medium">
                  <h4>STATUS</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="wil-component__label-mini wil-component__mini-container--small">
                  <h4>QUANTITY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="wil-component__label-icons wil-component__mini-container--small">
                <h4>ACTIONS</h4>
              </div>
            </div>
            {inventories.map((inventory) => (
              <li key={inventory.id} className="wil-component__item">
                <div className="wil-component__item-container wil-component__item-container--left">
                  <div className="wil-component__mini-container wil-component__mini-container--text wil-component__mini-container--large">
                    <h4 className="wil-component__label">INVENTORY</h4>
                    <Link
                      to={`/inventories/${inventory.id}`}
                      className="wil-component__data--arrow"
                    >
                      {inventory.item_name}
                      <img src={arrowIcon} alt="Arrow Icon" />
                    </Link>
                  </div>
                  <div className="wil-component__mini-container wil-component__mini-container--text wil-component__mini-container--large">
                    <h4 className="wil-component__label">CATEGORY</h4>
                    <p className="wil-component__data">{inventory.category}</p>
                  </div>
                  <div className="wil-component__mini-container wil-component__mini-container--delete">
                    <img
                      className="wil-component__delete wil-component__delete--mobile"
                      src={deleteIcon}
                      alt="Delete icon"
                      onClick={() => openModal(inventory)}
                    />
                  </div>
                </div>
                <div className="wil-component__item-container wil-component__item-container--right">
                  <div className="wil-component__mini-container wil-component__mini-container--text wil-component__mini-container--medium">
                    <h4 className="wil-component__label">STATUS</h4>
                    <div>
                      <span
                        className={`wil-component__data ${
                          inventory.status === "Out of Stock"
                            ? "wil-component__data--tag-red"
                            : "wil-component__data--tag-green"
                        }`}
                      >
                        {inventory.status}
                      </span>
                    </div>
                  </div>
                  <div className="wil-component__mini-container wil-component__mini-container--text ">
                    <h4 className="wil-component__label">QUANTITY</h4>
                    <div className="wil-component__data">
                      <p className="test">{inventory.quantity}</p>
                    </div>
                  </div>
                  <div className="wil-component__mini-container wil-component__mini-container--edit">
                    <img
                      className="wil-component__edit wil-component__edit--mobile"
                      src={editIcon}
                      alt="Edit icon"
                      onClick={() =>
                        navigate(`/inventories/${inventory.id}/edit`)
                      }
                    />
                  </div>
                </div>
                <div className="wil-component__icons-holder wil-component__mini-container--small">
                  <img
                    className="wil-component__delete "
                    src={deleteIcon}
                    onClick={() => openModal(inventory)}
                    alt="Delete icon"
                  />
                  <img
                    className="wil-component__edit"
                    src={editIcon}
                    alt="Edit icon"
                    onClick={() =>
                      navigate(`/inventories/${inventory.id}/edit`)
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showModal && selectedInventory && (
        <Modal title={selectedInventory.item_name} onClose={closeModal}>
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
    </>
  );
}
