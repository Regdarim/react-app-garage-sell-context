import React, { useContext } from "react";
import AppContext from "../../context/context";

const DeleteItemAlertModal = props => {
  const context = useContext(AppContext);
  const { toggleManager, deleteGarageItem } = context;
  return (
    <div className="modal is-active">
      <div className="modal-background" id="close" onClick={toggleManager} />
      <div className="modal-card">
        <header className="modal-card-head">
          <button className="delete" id="close" onClick={toggleManager} />
        </header>
        <section className="modal-card-body has-text-centered">
          <div className="content">Do you really want to delete this Item?</div>
        </section>
        <footer className="modal-card-foot column is-flex">
          <a
            className="button is-danger"
            id="deleteItem"
            onClick={() => deleteGarageItem()}
          >
            Yes
          </a>
          <a className="button is-info" id="close" onClick={toggleManager}>
            No
          </a>
        </footer>
      </div>
    </div>
  );
};
export default DeleteItemAlertModal;
