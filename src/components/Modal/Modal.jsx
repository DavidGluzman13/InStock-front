import "./Modal.scss";

const Modal = ({ title, children, onClose, source }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__upper">
          <button className="modal__close" onClick={onClose}>
            X
          </button>
          <div className="modal__text">
            <h1>{`Delete ${title} ${
              source === "warehouse" ? "Warehouse" : "inventory item"
            }Warehouse?`}</h1>
            <p className="modal__description">
              Please confirm that you’d like to delete
              {source === "warehouse" ? "the" : ""}
              {title} from the{" "}
              {source === "warehouse" ? "list of warehouses" : "inventory list"}
              . You won’t be able to undo this action.
            </p>
          </div>
        </div>

        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
