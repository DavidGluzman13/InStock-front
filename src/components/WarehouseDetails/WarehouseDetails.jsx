import whiteEditIcon from "../../assets/Icons/edit-24px-white.svg";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";
import { useNavigate, Link } from "react-router-dom";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";

export default function WarehouseDetails({ currentWarehouse }) {
  const navigate = useNavigate();

  function navigateToHome(e) {
    e.preventDefault();
    navigate("/");
  }

  function navigateToEdit(e) {
    e.preventDefault();
    navigate(`/warehouses/${currentWarehouse.id}/edit`);
  }

  return (
    <>
      <div className="component-wrapper">
        <div className="wh-component">
          {/* --------------------Header----------------------- */}
          <div className="heading">
            <div className="heading__titlediv">
              <button className="button" onClick={navigateToHome}>
                <img className="back-arrow" src={backArrow} alt="back-arrow" />
              </button>
              <h1>{currentWarehouse.warehouse_name}</h1>
            </div>
            <button className="heading__image button" onClick={navigateToEdit}>
              <img
                className="edit-icon"
                src={whiteEditIcon}
                alt="white edit icon"
              />
              <p className="edit-text">Edit</p>
            </button>
          </div>
          {/* ------------------Details------------------ */}
          <div className="wh-details">
            <div className="wh-details__address">
              <h4 className="address-header">WAREHOUSE ADDRESS:</h4>
              <p className="address-text">
                {currentWarehouse.address},{` `}
                {currentWarehouse.city},{` `}
                {currentWarehouse.country}
              </p>
            </div>
            <div className="wh-details__contact">
              <div className="contact-person">
                <h4>CONTACT NAME:</h4>
                <p>{currentWarehouse.contact_name}</p>
                <p>{currentWarehouse.contact_position}</p>
              </div>
              <div className="contact-info">
                <h4>CONTACT INFORMATION:</h4>
                <p>{currentWarehouse.contact_phone}</p>
                <p>{currentWarehouse.contact_email}</p>
              </div>
            </div>
          </div>
          {/* -----------------Items------------------ */}
          <WarehouseInventoryList currentWarehouse={currentWarehouse} />
        </div>
      </div>
    </>
  );
}
