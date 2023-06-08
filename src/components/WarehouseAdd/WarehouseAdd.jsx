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
    console.log(contact_phone);
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

    console.log(contact_phone);
    console.log(newWarehouse);
    axios
      .post("http://localhost:8080/api/warehouses/", newWarehouse)
      .then((response) => {
        console.log(response.data);
        // navigate("/SuccessPage"); some type of success prompt
        setTimeout(() => {
          // navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleWarehouse_name = (event) => {
    setWarehouse_name(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleContact_name = (event) => {
    setContact_name(event.target.value);
  };
  const handleContact_position = (event) => {
    setContact_position(event.target.value);
  };
  const handleContact_phone = (event) => {
    setContact_phone(event.target.value);
  };
  const handleContact_email = (event) => {
    setContact_email(event.target.value);
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
          <div className="wha__section">
            <h2 className="wha__subh">Warehouse Details</h2>
            <div className="wha__field">
              <label className="wha__label" htmlFor="Warehouse Name">
                Warehouse Name
              </label>
              <input
                className="wha__input"
                value={warehouse_name}
                onChange={handleWarehouse_name}
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
                onChange={handleAddress}
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
                onChange={handleCity}
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
                onChange={handleCountry}
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
                onChange={handleContact_name}
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
                onChange={handleContact_position}
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
                onChange={handleContact_phone}
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
                onChange={handleContact_email}
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
