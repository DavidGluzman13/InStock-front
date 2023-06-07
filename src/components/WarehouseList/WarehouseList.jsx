import "./WarehouseList.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

export default function WarehouseList() {
  return (
    <section className="component">
      <div className="component__header">
        <h1 className="component__title">Warehouses</h1>
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
        <ul className="component__warehouse-list">
          <li className="component__warehouse-item">
            <div className="component__warehouse-container">
              <div className="component__container-mini">
                <p className="component__label">WAREHOUSE</p>
                <p className="component__data component__data--icon">
                  Manhattan <img src={arrowIcon} alt="arrow icon" />
                </p>
              </div>
              <div className="component__container-mini">
                <p className="component__label">CONTACT NAME</p>
                <p className="component__data">Parmin Aujla</p>
              </div>
            </div>
            <div className="component__warehouse-container">
              <div className="component__container-mini">
                <p className="component__label">ADDRESS</p>
                <p className="component__data ">503 Broadway, New York, USA</p>
              </div>
              <div className="component__container-mini">
                <p className="component__label">CONTACT INFORMATION</p>
                <p className="component__data ">+1 (629) 555-0129</p>
                <p className="component__data ">paujla@instock.com</p>
              </div>
            </div>
            <div className="component__warehouse-container component__warehouse-container--icons">
              <img src={deleteIcon} alt="delete icon" />
              <img src={editIcon} alt="edit icon" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
