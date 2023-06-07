import "./WarehouseList.scss";

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
      <div className="component__body">This is a body</div>
    </section>
  );
}
