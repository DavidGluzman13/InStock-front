import "./WarehouseList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WarehouseList() {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => setWarehouses(response.data));
  }, []);

  if (!warehouses) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="component-wrapper">
      <section className="component">
        <div className="component__header">
          <h1 className="component__title h1">Warehouses</h1>
          <div className="component__header-container">
            <input
              className="component__header-input"
              type="text"
              placeholder="Search..."
            />
            <Link to="/warehouses/add" className="component__header-button">
              + Add New Warehouse
            </Link>
          </div>
        </div>
        <div className="component__body">
          <ul className="component__list">
            <div className="component__label-container">
              <div className="component__label-left">
                <div className="component__label-mini component__mini-container--medium ">
                  <h4 className="component__label-text">WAREHOUSE</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="component__label-mini component__mini-container--large">
                  <h4 className="component__label-text">ADDRESS</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="component__label-right">
                <div className="component__label-mini component__mini-container--medium">
                  <h4 className="component__label-text">CONTACT NAME</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
                <div className="component__label-mini component__mini-container--xlarge">
                  <h4 className="component__label-text">CONTACT INFORMATION</h4>
                  <img src={sortIcon} alt="Sort Icon" />
                </div>
              </div>
              <div className="component__label-icons component__mini-container--small">
                <h4 className="component__label-text">ACTIONS</h4>
              </div>
            </div>
            {warehouses.map((warehouse) => (
              <li className="component__item">
                <div className="component__item-container component__item-container--left">
                  <div className="component__mini-container component__mini-container--text component__mini-container--medium">
                    <h4 className="component__label">WAREHOUSE</h4>
                    <Link
                      to={`/warehouses/${warehouse.id}`}
                      className="component__data--arrow"
                    >
                      {warehouse.warehouse_name}
                      <img src={arrowIcon} alt="Arrow Icon" />
                    </Link>
                  </div>
                  <div className="component__mini-container component__mini-container--text component__mini-container--large">
                    <h4 className="component__label">ADDRESS</h4>
                    <p className="component__data">
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </p>
                  </div>
                  <div className="component__mini-container component__mini-container--delete">
                    <img
                      className="component__delete component__delete--mobile"
                      src={deleteIcon}
                      alt="Delete icon"
                    />
                  </div>
                </div>
                <div className="component__item-container component__item-container--right">
                  <div className="component__mini-container component__mini-container--text component__mini-container--medium component__mini-container--gap">
                    <h4 className="component__label">CONTACT NAME</h4>
                    <p className="component__data">{warehouse.contact_name}</p>
                  </div>
                  <div className="component__mini-container component__mini-container--text component__mini-container--xlarge component__mini-container--gap">
                    <h4 className="component__label">CONTACT INFORMATION</h4>
                    <div className="component__data">
                      <p>{warehouse.contact_phone}</p>
                      <p>{warehouse.contact_email}</p>
                    </div>
                  </div>
                  <div className="component__mini-container component__mini-container--edit">
                    <img
                      className="component__edit component__edit--mobile"
                      src={editIcon}
                      alt="Edit icon"
                    />
                  </div>
                </div>
                <div className="component__icons-holder component__mini-container--small">
                  <img
                    className="component__delete "
                    src={deleteIcon}
                    alt="Delete icon"
                  />
                  <img
                    className="component__edit"
                    src={editIcon}
                    alt="Edit icon"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
