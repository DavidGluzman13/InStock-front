import "./WarehouseAdd.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function WarehouseAdd() {
  const [warehouse_name, setWarehouse_name] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [contact_position, setContact_position] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [contact_email, setContact_email] = useState("");

  function formatPhone(number) {
    if (number.slice(0, 1) !== "+") {
      return (
        "+" +
        number.slice(0, 1) +
        " (" +
        number.slice(1, 4) +
        ") " +
        number.slice(4, 7) +
        "-" +
        number.slice(7, 11)
      );
    }
    return number;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setContact_phone(formatPhone(contact_phone));

    const newWarehouse = {
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
    };

    axios
      .post("http://localhost:8080/api/warehouses/", newWarehouse)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // wha === warehouse add
  return (
    <div className="wha-wrapper">
      <section className="wha">
        <div className="wha__header">
          <Link to="/">
            <img
              className="wha__header--icon"
              src={backIcon}
              alt="Back Arrow icon"
            />
          </Link>
          <h1 className="wha__header--title h1">Add New Warehouse</h1>
        </div>

        <form className="wha__form" onSubmit={handleSubmit} method="POST">
          <div className="wha__section wha__section--divider">
            <h2 className="wha__subh">Warehouse Details</h2>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Warehouse Name">
                Warehouse Name
              </label>
              <input
                className={"wha__input"}
                value={warehouse_name}
                onChange={(e) => setWarehouse_name(e.target.value)}
                type="text"
                placeholder="Warehouse Name"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Street Address">
                Street Address
              </label>
              <input
                className="wha__input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Street Address"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="City">
                City
              </label>
              <input
                className="wha__input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Country">
                Country
              </label>
              <input
                className="wha__input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                placeholder="Country"
              ></input>
            </div>
          </div>

          <div className="wha__section">
            <h2 className="wha__subh">Contact Details</h2>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Contact Name">
                Contact Name
              </label>
              <input
                className="wha__input"
                value={contact_name}
                onChange={(e) => setContact_name(e.target.value)}
                type="text"
                placeholder="Contact Name"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Position">
                Position
              </label>
              <input
                className="wha__input"
                value={contact_position}
                onChange={(e) => setContact_position(e.target.value)}
                type="text"
                placeholder="Position"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                className="wha__input"
                value={contact_phone}
                onChange={(e) => setContact_phone(e.target.value)}
                type="text"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Email">
                Email
              </label>
              <input
                className="wha__input"
                value={contact_email}
                onChange={(e) => setContact_email(e.target.value)}
                type="text"
                placeholder="Email"
              ></input>
            </div>
          </div>

          <div className="wha-button">
            <Link className="wha-button__gen wha-button__gen--cancel" to="/">
              Cancel
            </Link>
            <button
              className="wha-button__gen wha-button__gen--submit"
              type="submit"
            >
              + Add Warehouse
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
