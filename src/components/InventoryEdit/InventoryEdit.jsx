import "./InventoryEdit.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dropIcon from "../../assets/Icons/arrow_drop_down-24px.svg";
import axios from "axios";
export default function InventoryEdit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);
  const param = useParams();

  const warehouses = [
    "Manhattan",
    "Washington",
    "Jersey",
    "SF",
    "Santa Monica",
    "Seattle",
    "Miami",
    "Boston",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${param.id}`)
      .then((response) => {
        axios
          .get(
            `http://localhost:8080/api/warehouses/${response.data.warehouse_id}`
          )
          .then((response) => setWarehouse(response.data.warehouse_name));
        console.log(response.data);
        const tempQuantity = response.data.quantity;
        setName(response.data.item_name);
        setDescription(response.data.description);
        setStatus(response.data.status);
        setQuantity(tempQuantity);
        setCategory(response.data.category);
        tempQuantity === 0 ? setShowQuantity(false) : setShowQuantity(true);
        tempQuantity === 0 ? setStatus("Out of Stock") : setStatus("In Stock");
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleWarehouseChange = (event) => {
    setWarehouse(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
    }
    let tempQuantity;
    let tempStatus;
    if (status === "Out of Stock") {
      tempQuantity = 0;
      setQuantity(tempQuantity);
    } else {
      tempQuantity = quantity;
    }

    const warehouseId = warehouses.indexOf(warehouse) + 1;

    axios.put(`http://localhost:8080/api/inventories/${param.id}`, {
      warehouse_id: warehouseId,
      item_name: name,
      description: description,
      category: category,
      status: tempStatus,
      quantity: tempQuantity,
    });

    console.log(`
      Item name : ${name},
      Item: ${description},
      Category: ${category},
      Status: ${status},
      Quantity: ${tempQuantity},
      WarehouseId: ${warehouseId + 1}
    `);
  };

  return (
    <div className="inv-edit-wrapper">
      <section className="inv-edit">
        <div className="inv-edit__header">
          <img className="inv-edit__back-icon" src={backIcon} alt="back icon" />
          <h1 className="inv-edit__title ">Edit Inventory Item</h1>
        </div>
        <div className="inv-edit__body">
          <form onSubmit={handleSubmit} action="inv-edit__form">
            <div className="inv-edit__form-container">
              <div className="inv-edit__details">
                <h2 className="inv-edit__subtitle">Item Details</h2>
                <div className="inv-edit__field-container">
                  <div className="inv-edit__field">
                    <label className="inv-edit__label" htmlFor="name">
                      Item Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="inv-edit__input"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="inv-edit__field">
                    <label className="inv-edit__label" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      type="text"
                      className="inv-edit__input inv-edit__input--textarea"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                  <div className="inv-edit__field ">
                    <label className="inv-edit__label">Category</label>

                    <select
                      className="inv-edit__input"
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Gear">Gear</option>
                      <option value="Apparel">Apparel</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="inv-edit__divider" />
              <div className="inv-edit__availability">
                <h2 className="inv-edit__subtitle">Item Availabiltiy</h2>
                <div className="inv-edit__field-container">
                  <div className="inv-edit__field">
                    <label className="inv-edit__label">Status</label>
                    <div className="inv-edit__check-container">
                      <div className="inv-edit__check-field">
                        <input
                          type="radio"
                          id="inStock"
                          name="status"
                          value="in stock"
                          checked={status === "In Stock"}
                          onChange={() => {
                            setStatus("In Stock");
                            setShowQuantity(true);
                          }}
                        />
                        <label
                          className="inv-edit__check-label"
                          htmlFor="inStock"
                        >
                          In stock
                        </label>
                      </div>
                      <div className="inv-edit__check-field">
                        <input
                          type="radio"
                          id="outStock"
                          name="status"
                          value="out of stock"
                          checked={status === "Out of Stock"}
                          onChange={() => {
                            setStatus("Out Of Stock");
                            setShowQuantity(false);
                          }}
                        />
                        <label
                          className="inv-edit__check-label"
                          htmlFor="outStock"
                        >
                          Out of stock
                        </label>
                      </div>
                    </div>
                  </div>

                  {showQuantity && (
                    <div className="inv-edit__field">
                      <label className="inv-edit__label" htmlFor="quantity">
                        Quantity
                      </label>
                      <input
                        name="quantity"
                        id="quantity"
                        type="number"
                        className="inv-edit__input"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                    </div>
                  )}

                  <div className="inv-edit__field">
                    <label className="inv-edit__label" htmlFor="warehouse">
                      Warehouse
                    </label>
                    <select
                      id="warehouse"
                      className="inv-edit__input"
                      value={warehouse}
                      onChange={handleWarehouseChange}
                    >
                      <option value="Manhattan">Manhattan</option>
                      <option value="Washington">Washington</option>
                      <option value="Jersey">Jersey</option>
                      <option value="SF">SF</option>
                      <option value="SantaMonica">Santa Monica</option>
                      <option value="Seattle">Seattle</option>
                      <option value="Miami">Miami</option>
                      <option value="Boston">Boston</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="inv-edit__btn-container">
              <Link
                to="/inventories"
                className="inv-edit__btn inv-edit__btn--cancel"
              >
                Cancel
              </Link>
              <button className="inv-edit__btn inv-edit__btn--save">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
