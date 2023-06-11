import "./InventoryList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InventoryList() {
  const [inventories, setInventories] = useState(null);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/inventories").then((response) => {
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
    <div className="il-component-wrapper">
      <section className="il-component">
        <div className="il-component__header">
          <h1 className="il-component__title h1">Inventories</h1>
          <div className="il-component__header-container">
            <input
              className="il-component__header-input"
              type="text"
              placeholder="Search..."
            />
            <Link to="/inventories/add" className="il-component__header-button">
              + Add New Inventory
            </Link>
          </div>
        </div>
        <div className="il-component__body">
          <ul className="il-component__list">
            <div className="il-component__label-container">
              <div className="il-component__label-left">
                <div className="il-component__label-mini il-component__mini-container--large ">
                  <h4>INVENTORY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="il-component__label-mini il-component__mini-container--large">
                  <h4>CATEGORY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="il-component__label-right">
                <div className="il-component__label-mini il-component__mini-container--medium">
                  <h4>STATUS</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="il-component__label-mini il-component__mini-container--small">
                  <h4>QUANTITY</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="il-component__label-mini il-component__mini-container--medium">
                  <h4>WAREHOUSE</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="il-component__label-icons il-component__mini-container--small">
                <h4>ACTIONS</h4>
              </div>
            </div>
            {inventories.map((inventory) => (
              <li key={inventory.id} className="il-component__item">
                <div className="il-component__item-container il-component__item-container--left">
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--large">
                    <h4 className="il-component__label">INVENTORY</h4>
                    <Link
                      to={`/inventories/${inventory.id}`}
                      className="il-component__data--arrow"
                    >
                      {inventory.item_name}
                      <img src={arrowIcon} alt="Arrow Icon" />
                    </Link>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--large">
                    <h4 className="il-component__label">CATEGORY</h4>
                    <p className="il-component__data">{inventory.category}</p>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--delete">
                    <img
                      className="il-component__delete il-component__delete--mobile"
                      src={deleteIcon}
                      alt="Delete icon"
                      onClick={() => openModal(inventory)}
                    />
                  </div>
                </div>
                <div className="il-component__item-container il-component__item-container--right">
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--medium">
                    <h4 className="il-component__label">STATUS</h4>
                    <div>
                      <span
                        className={`il-component__data ${
                          inventory.status === "Out of Stock"
                            ? "il-component__data--tag-red"
                            : "il-component__data--tag-green"
                        }`}
                      >
                        {inventory.status}
                      </span>
                    </div>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--text ">
                    <h4 className="il-component__label">QUANTITY</h4>
                    <div className="il-component__data">
                      <p className="test">{inventory.quantity}</p>
                    </div>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--text il-component__mini-container--medium">
                    <h4 className="il-component__label">WAREHOUSE</h4>
                    <div className="il-component__data">
                      <p>{inventory.warehouse_name}</p>
                    </div>
                  </div>
                  <div className="il-component__mini-container il-component__mini-container--edit">
                    <img
                      className="il-component__edit il-component__edit--mobile"
                      src={editIcon}
                      alt="Edit icon"
                      onClick={() =>
                        navigate(`/inventories/${inventory.id}/edit`)
                      }
                    />
                  </div>
                </div>
                <div className="il-component__icons-holder il-component__mini-container--small">
                  <img
                    className="il-component__delete "
                    src={deleteIcon}
                    onClick={() => openModal(inventory)}
                    alt="Delete icon"
                  />
                  <img
                    className="il-component__edit"
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
    </div>
  );
}
