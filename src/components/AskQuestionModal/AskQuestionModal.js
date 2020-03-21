import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const AskQuestionModal = props => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" onClick={props.closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <ContactForm />
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={props.closeModal}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AskQuestionModal;
