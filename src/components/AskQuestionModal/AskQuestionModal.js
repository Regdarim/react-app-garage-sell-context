import React, { useContext } from "react";
import ContactForm from "../ContactForm/ContactForm";
import AppContext from "../../context/context";

const AskQuestionModal = () => {
  const context = useContext(AppContext);
  const { toggleManager } = context;

  return (
    <div className="modal is-active">
      <div className="modal-background" id="close" onClick={toggleManager} />
      <div className="modal-card">
        <header className="modal-card-head">
          <button className="delete" id="close" onClick={toggleManager} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <ContactForm />
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" id="close" onClick={toggleManager}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AskQuestionModal;
