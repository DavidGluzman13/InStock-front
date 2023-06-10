import "./InventoryAdd.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import dropDownArrow from "../../assets/Icons/arrow_drop_down-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";

export default function InventoryAdd() {
  const navigate = useNavigate();

  const [item_name, setItem_name] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse_id, setWarehouse_id] = useState("");
  const [error, setError] = useState(false);

  const [isItem_name, setIsItem_name] = useState(true);
  const [isDescription, setIsDescription] = useState(true);
  const [isCategory, setIsCategory] = useState(true);
  const [isStatus, setIsStatus] = useState(true);
  const [isQuantity, setIsQuantity] = useState(true);
  const [isWarehouse_id, setIsWarehouse_id] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = [
      item_name,
      description,
      category,
      status,
      quantity,
      warehouse_id,
    ];

    for (let i in item) {
      if (!item[i]) {
        setError(true);
      }
    }

    if (!item_name) {
      setIsItem_name(false);
    }
    if (!description) {
      setIsDescription(false);
    }
    if (!category) {
      setIsCategory(false);
    }
    if (!status) {
      setIsStatus(false);
      setError(true);
    }
    if (!quantity) {
      setIsQuantity(false);
    }
    if (!warehouse_id) {
      setIsWarehouse_id(false);
      setError(true);
    }

    const newItem = {
      item_name,
      description,
      category,
      status,
      quantity,
      warehouse_id,
    };

    console.log(newItem);
    axios
      .post("http://localhost:8080/api/inventories/", newItem)
      .then((response) => {
        console.log(response.data);
        alert("Added");
        navigate("/inventories");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function navigateToHome(e) {
    e.preventDefault();
    navigate(-1);
  }

  function alertCancel(e) {
    e.preventDefault();
    alert("Canceled");
    navigate(-1);
  }

  const handleItem_name = (event) => {
    setItem_name(event.target.value);
    setIsItem_name(true);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
    setIsDescription(true);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
    setIsCategory(true);
  };
  const handleQuantity = (event) => {
    setQuantity(event.target.value);
    setIsQuantity(true);
  };
  const handleWarehouse_id = (event) => {
    setWarehouse_id(event.target.value);
    setIsWarehouse_id(true);
  };

  const handleRadioButton = (value) => {
    setStatus(value === 1 ? "In Stock" : "Out of Stock");
    setIsStatus(true);

    if (value === 0) {
      setQuantity("");
    }
  };

  return (
    <>
      <div className="component-wrapper">
        <div className="add-component">
          {/* --------------------Header----------------------- */}
          <div className="itm-heading">
            <button className="button" onClick={navigateToHome}>
              <img className="back-arrow" src={backArrow} alt="back-arrow" />
            </button>
            <h1>Add New Inventory Item</h1>
          </div>
          <div className="add-item">
            {/* -----------------form 1--------------- */}
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="add-item__form"
            >
              <div className="content-wrapper">
                <div className="item-detials">
                  <h2 className="item-detials__heading">Item Details</h2>
                  <h3>Item Name</h3>
                  <input
                    name="nameItem"
                    className={`input ${isItem_name ? "" : "input--invalid"}`}
                    onChange={handleItem_name}
                    value={item_name}
                  />{" "}
                  {error && !description ? (
                    <div className="error-wrapper">
                      <img className="error__icon" src={errorIcon} />
                      <label className="error">This field is required</label>
                    </div>
                  ) : (
                    <div className="padding-div"></div>
                  )}
                  <h3>Description</h3>
                  <input
                    name="description"
                    className={`input--bigger ${
                      isDescription ? "" : "input--bigger--invalid"
                    }`}
                    placeholder="Please enter a brief item description..."
                    onChange={handleDescription}
                    value={description}
                  />
                  {error && !description ? (
                    <div className="error-wrapper">
                      <img className="error__icon" src={errorIcon} />
                      <label className="error">This field is required</label>
                    </div>
                  ) : (
                    <div className="padding-div"></div>
                  )}
                  <h3>Category</h3>
                  <div className="category-wrapper">
                    <select
                      name="category"
                      className={`select ${
                        isCategory ? "" : "select--invalid"
                      }`}
                      onChange={handleCategory}
                      value={category}
                    >
                      <option value="">Please Select</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Apparel">Apparel</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Gear">Gear</option>
                      <option value="Health">Health</option>
                    </select>
                    <img
                      className="drop-arrow"
                      src={dropDownArrow}
                      alt="drop down arrow"
                    />
                  </div>
                  {error && !description ? (
                    <div className="error-wrapper">
                      <img className="error__icon" src={errorIcon} />
                      <label className="error">This field is required</label>
                    </div>
                  ) : (
                    <div className="padding-div"></div>
                  )}
                </div>
                {/* -----------------form 2--------------- */}
                <div className="item-availability">
                  <h2 className="item-availability__heading">
                    Item Availability
                  </h2>
                  <div className="status">
                    <h3>Status</h3>
                    <div className="status-wrapper">
                      <div className="status-wrapper__instock">
                        <input
                          className={`radio-button ${
                            !isStatus ? "radio-button--invalid" : ""
                          }`}
                          type="radio"
                          checked={status === "In Stock"}
                          onChange={() => handleRadioButton(1)}
                        />
                        <label>In Stock</label>
                      </div>
                      <div className="status-wrapper__out-of-stock">
                        <input
                          className={`radio-button ${
                            !isStatus ? "radio-button--invalid" : ""
                          }`}
                          type="radio"
                          checked={status === "Out of Stock"}
                          onChange={() => handleRadioButton(0)}
                        />
                        <label>Out of Stock</label>
                      </div>
                    </div>
                    {error && !description ? (
                      <div className="error-wrapper">
                        <img className="error__icon" src={errorIcon} />
                        <label className="error">This field is required</label>
                      </div>
                    ) : (
                      <div className="padding-div"></div>
                    )}
                  </div>
                  {status === "In Stock" && (
                    <div className="quantity">
                      <h3>Quantity</h3>
                      <input
                        name="quantity"
                        className={`input ${
                          isQuantity ? "" : "input--invalid"
                        }`}
                        placeholder="0"
                        type="number"
                        onChange={handleQuantity}
                        value={quantity}
                      />
                      {error && !description ? (
                        <div className="error-wrapper">
                          <img className="error__icon" src={errorIcon} />
                          <label className="error">
                            This field is required
                          </label>
                        </div>
                      ) : (
                        <div className="padding-div"></div>
                      )}
                    </div>
                  )}
                  <div className="warehouse">
                    <h3>Warehouse</h3>
                    <div className="warehouse_id-wrapper">
                      <select
                        name="warehouse_id"
                        className={`select ${
                          !isWarehouse_id ? "select--invalid" : ""
                        }`}
                        placeholder="Please select"
                        onChange={handleWarehouse_id}
                        value={warehouse_id}
                      >
                        <option value="">Please Select</option>
                        <option value="1">Manhattan</option>
                        <option value="2">Washington</option>
                        <option value="3">Jersey</option>
                        <option value="4">Santa Monica</option>
                        <option value="5">Seattle</option>
                        <option value="6">Miami</option>
                        <option value="7">Boston</option>
                      </select>
                      <img
                        className="drop-arrow"
                        src={dropDownArrow}
                        alt="drop down arrow"
                      />
                    </div>
                    {error && !description ? (
                      <div className="error-wrapper">
                        <img className="error__icon" src={errorIcon} />
                        <label className="error">This field is required</label>
                      </div>
                    ) : (
                      <div className="padding-div"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button onClick={alertCancel} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="add-button">
                  + Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

{
  status === "In Stock" && (
    <div className="quantity">
      <h3>Quantity</h3>
      <input
        name="quantity"
        className={`input ${isQuantity ? "" : "input--invalid"}`}
        placeholder="0"
        type="number"
        onChange={handleQuantity}
        value={quantity}
      />
      {error && !description ? (
        <div className="error-wrapper">
          <img className="error__icon" src={errorIcon} />
          <label className="error">This field is required</label>
        </div>
      ) : (
        <div className="padding-div"></div>
      )}
    </div>
  );
}
