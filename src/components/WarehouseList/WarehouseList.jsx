import "./WarehouseList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

import { useState, useEffect } from "react";
import axios from "axios";

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
            <button className="component__header-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
        <div className="component__body">
          <div className="sort">
            <div className="sort__item">
              WAREHOUSE <img src={sortIcon} alt="sort icon" />
            </div>
            <div className="sort__item">
              ADDRESS <img src={sortIcon} alt="sort icon" />
            </div>
            <div className="sort__item">
              CONTENT NAME <img src={sortIcon} alt="sort icon" />
            </div>
            <div className="sort__item">
              CONTACT INFORMATION <img src={sortIcon} alt="sort icon" />
            </div>
            <div className="sort__item">ACTIONS</div>
          </div>
          <ul className="component__warehouse-list">
            {warehouses.map((warehouse) => (
              <li className="component__warehouse-item">
                <hr className="component__divider" />
                <div className="component__text-container">
                  <div className="component__warehouse-container">
                    <div className="component__container-mini">
                      <p className="component__label h4">WAREHOUSE</p>
                      <p className="component__data component__data--icon">
                        {warehouse.warehouse_name}
                        <img src={arrowIcon} alt="arrow icon" />
                      </p>
                    </div>
                    <div className="component__container-mini">
                      <p className="component__label h4">ADDRESS</p>
                      <p className="component__data ">
                        {warehouse.address}, {warehouse.city},{" "}
                        {warehouse.country}
                      </p>
                    </div>
                  </div>
                  <div className="component__warehouse-container">
                    <div className="component__container-mini">
                      <p className="component__label h4">CONTACT NAME</p>
                      <p className="component__data">
                        {warehouse.contact_name}
                      </p>
                    </div>
                    <div className="component__container-mini">
                      <p className="component__label h4">CONTACT INFORMATION</p>
                      <p className="component__data ">
                        {warehouse.contact_phone}
                      </p>
                      <p className="component__data ">
                        {warehouse.contact_email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="component__warehouse-container component__warehouse-container--icons">
                  <img src={deleteIcon} alt="delete icon" />
                  <img src={editIcon} alt="edit icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
