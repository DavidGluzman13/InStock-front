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

  const handleSubmit = (event) => {
    console.log("in");
    event.preventDefault();

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
    console.log("out");
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

  return (
    <section>
      {/* hover effect */}
      <div>
        <Link to="/">
          <img src={backIcon} alt="Back Arrow icon" />
        </Link>
        <h1>Add New Warehouse</h1>
      </div>
      {/* bottom border line */}
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <h2>Warehouse Details</h2>
          <label htmlFor="Warehouse Name">Warehouse Name</label>
          <input
            value={warehouse_name}
            onChange={handleWarehouse_name}
            type="text"
            placeholder="Warehouse Name"
          ></input>

          <label htmlFor="Street Address">Street Address</label>
          <input
            value={address}
            onChange={handleAddress}
            type="text"
            placeholder="Street Address"
          ></input>

          <label htmlFor="City">City</label>
          <input
            value={city}
            onChange={handleCity}
            type="text"
            placeholder="City"
          ></input>

          <label htmlFor="Country">Country</label>
          <input
            value={country}
            onChange={handleCountry}
            type="text"
            placeholder="Country"
          ></input>
        </div>
        {/* bottom border line */}
        <div>
          <h2>Contact Details</h2>
          <label htmlFor="Contact Name">Contact Name</label>
          <input
            value={contact_name}
            onChange={handleContact_name}
            type="text"
            placeholder="Contact Name"
          ></input>

          <label htmlFor="Position">Position</label>
          <input
            value={contact_position}
            onChange={handleContact_position}
            type="text"
            placeholder="Position"
          ></input>

          <label htmlFor="Phone Number">Phone Number</label>
          <input
            value={contact_phone}
            onChange={handleContact_phone}
            type="text"
            placeholder="Phone Number"
          ></input>

          <label htmlFor="Email">Email</label>
          <input
            value={contact_email}
            onChange={handleContact_email}
            type="text"
            placeholder="Email"
          ></input>
        </div>
        {/* buttons */}
        <div>
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button type="submit">+ Add Warehouse</button>
        </div>
      </form>
    </section>
  );
}

//       onChange={() => handleAddress(e)}
