import "./Modal.scss";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__upper">
          <button className="modal__close" onClick={onClose}>
            X
          </button>
          <div className="modal__text">
            <h1>{`Delete ${title} Warehouse?`}</h1>
            <p className="modal__description">
              Please confirm that you’d like to delete the {title} from the list
              of warehouses. You won’t be able to undo this action.
            </p>
          </div>
        </div>

        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
