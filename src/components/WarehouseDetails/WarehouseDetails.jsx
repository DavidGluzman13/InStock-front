import whiteEditIcon from "../../assets/Icons/edit-24px-white.svg";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss"

export default function WarehouseDetails({ currentWarehouse }) {
  return (
    <>
      <div className="details-wrapper">
        {/* --------------------Header----------------------- */}
        <div className="heading">
          <div className="heading__titlediv">
            <img className="back-arrow" src={backArrow} alt="back-arrow" />
            <h1>{currentWarehouse.warehouse_name}</h1>
          </div>
          <div className="heading__image">
            <img
              className="edit-icon"
              src={whiteEditIcon}
              alt="white edit icon"
            />
            <p className="edit-text">Edit</p>
          </div>
        </div>
        {/* ------------------Details------------------ */}
        <div className="details">
          <div className="details__address">
            <h4 className="address-header">WAREHOUSE ADDRESS:</h4>
            <p className="address-text">{currentWarehouse.address}</p>
          </div>
          <div className="details__contact">
            <div className="contact-person">
              <h4>CONTACT NAME:</h4>
              <span>{currentWarehouse.contact_name}</span>
              <span>{currentWarehouse.contact_position}</span>
            </div>
            <div className="contact-info">
              <h4>CONTACT INFORMATION:</h4>
              <span>{currentWarehouse.contact_phone}</span>
              <span>{currentWarehouse.contact_email}</span>
            </div>
          </div>
        </div>
        {/* -----------------Items------------------ */}
      </div>
    </>
  );
}
