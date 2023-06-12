import "./WarehouseEdit.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function WarehouseEdit() {
  const navigate = useNavigate();
  const param = useParams();
  const [warehouse_name, setWarehouse_name] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [contact_position, setContact_position] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [error, setError] = useState(false);

  const [isWarehouse_name, setIsWarehouse_name] = useState(true);
  const [isAddress, setIsAddress] = useState(true);
  const [isCity, setIsCity] = useState(true);
  const [isCountry, setIsCountry] = useState(true);
  const [isContact_name, setIsContact_name] = useState(true);
  const [isContact_position, setIsContact_position] = useState(true);
  const [isContact_phone, setIsContact_phone] = useState(true);
  const [isContact_email, setIsContact_email] = useState(true);

  function formatPhone(number) {
    if (number.slice(0, 1) != "+") {
      return (
        "+1 (" +
        number.slice(0, 3) +
        ") " +
        number.slice(3, 6) +
        "-" +
        number.slice(6, 10)
      );
    }
    return number;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${param.id}`)
      .then((response) => {
        setWarehouse_name(response.data.warehouse_name);
        setAddress(response.data.address);
        setCity(response.data.city);
        setCountry(response.data.country);
        setContact_name(response.data.contact_name);
        setContact_position(response.data.contact_position);
        setContact_phone(response.data.contact_phone);
        setContact_email(response.data.contact_email);
      });
  }, []);

  const handleSubmit = (event) => {
    setError(false);
    event.preventDefault();

    let warehouse = [
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
    ];

    for (let i in warehouse) {
      if (!warehouse[i]) {
        setError(true);
      }
    }

    if (!warehouse_name) {
      setIsWarehouse_name(false);
    }
    if (!address) {
      setIsAddress(false);
    }
    if (!city) {
      setIsCity(false);
    }
    if (!country) {
      setIsCountry(false);
    }
    if (!contact_name) {
      setIsContact_name(false);
    }
    if (!contact_position) {
      setIsContact_position(false);
    }
    if (!contact_phone) {
      setIsContact_phone(false);
    }
    if (!contact_email) {
      setIsContact_email(false);
    }

    let formattedPhone = formatPhone(contact_phone);
    axios
      .put(`http://localhost:8080/api/warehouses/${param.id}`, {
        warehouse_name: warehouse_name,
        address: address,
        city: city,
        country: country,
        contact_name: contact_name,
        contact_position: contact_position,
        formattedPhone: formattedPhone,
        contact_email: contact_email,
      })
      .then(() => {
        alert("Warehouse has been updated");
        navigate("/warehouses");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleWarehouse_name = (event) => {
    setWarehouse_name(event.target.value);
    setIsWarehouse_name(true);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
    setIsAddress(true);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
    setIsCity(true);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
    setIsCountry(true);
  };
  const handleContact_name = (event) => {
    setContact_name(event.target.value);
    setIsContact_name(true);
  };
  const handleContact_position = (event) => {
    setContact_position(event.target.value);
    setIsContact_position(true);
  };
  const handleContact_phone = (event) => {
    setContact_phone(event.target.value);
    setIsContact_phone(true);
  };
  const handleContact_email = (event) => {
    setContact_email(event.target.value);
    setIsContact_email(true);
  };

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
          <h1 className="wha__header--title h1">Edit Warehouse</h1>
        </div>

        <form className="wha__form" onSubmit={handleSubmit} method="POST">
          <div className="wha__section wha__section--divider">
            <h2 className="wha__subh">Warehouse Details</h2>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Warehouse Name">
                Warehouse Name
              </label>
              <input
                className={`wha__input ${
                  isWarehouse_name ? "" : "wha__input--invalid"
                }`}
                value={warehouse_name}
                onChange={handleWarehouse_name}
                type="text"
                placeholder="Warehouse Name"
              ></input>
              {error && !warehouse_name ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Street Address">
                Street Address
              </label>
              <input
                className={`wha__input ${
                  isAddress ? "" : "wha__input--invalid"
                }`}
                value={address}
                onChange={handleAddress}
                type="text"
                placeholder="Street Address"
              ></input>
              {error && !address ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="City">
                City
              </label>
              <input
                className={`wha__input ${isCity ? "" : "wha__input--invalid"}`}
                value={city}
                onChange={handleCity}
                type="text"
                placeholder="City"
              ></input>
              {error && !city ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Country">
                Country
              </label>
              <input
                className={`wha__input ${
                  isCountry ? "" : "wha__input--invalid"
                }`}
                value={country}
                onChange={handleCountry}
                type="text"
                placeholder="Country"
              ></input>
              {error && !country ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="wha__section">
            <h2 className="wha__subh">Contact Details</h2>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Contact Name">
                Contact Name
              </label>

              <input
                className={`wha__input ${
                  isContact_name ? "" : "wha__input--invalid"
                }`}
                value={contact_name}
                onChange={handleContact_name}
                type="text"
                placeholder="Contact Name"
              ></input>
              {error && !contact_name ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Position">
                Position
              </label>
              <input
                className={`wha__input ${
                  isContact_position ? "" : "wha__input--invalid"
                }`}
                value={contact_position}
                onChange={handleContact_position}
                type="text"
                placeholder="Position"
              ></input>
              {error && !contact_position ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                className={`wha__input ${
                  isContact_phone ? "" : "wha__input--invalid"
                }`}
                value={contact_phone}
                onChange={handleContact_phone}
                type="text"
                placeholder="Phone Number"
              ></input>
              {error && contact_phone.length < 10 ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  Please enter a valid phone number
                </label>
              ) : (
                ""
              )}
            </div>

            <div className="wha__field">
              <label className="wha__label" htmlFor="Email">
                Email
              </label>
              <input
                className={`wha__input ${
                  isContact_email ? "" : "wha__input--invalid"
                }`}
                value={contact_email}
                onChange={handleContact_email}
                type="text"
                placeholder="Email"
              ></input>
              {error && !contact_email ? (
                <label className="error">
                  <img className="error__icon" src={errorIcon} />
                  Please enter a valid email
                </label>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="wha-button">
            <Link className="wha-button__gen wha-button__gen--cancel" to="/">
              Cancel
            </Link>
            <button
              className="wha-button__gen wha-button__gen--save"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
        <Footer />
      </section>
    </div>
  );
}
